import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  NgModule,
  OnDestroy,
  OnInit,
} from '@angular/core'
import { BrowserModule, provideClientHydration } from '@angular/platform-browser'
import { PreloadAllModules, RouterModule } from '@angular/router'
import { MainMenuComponent } from './components/header/main-menu/main-menu.component'
import { HeaderComponent } from './components/header/header.component'
import {
  filter,
  map,
  mergeMap,
  Subject,
  takeUntil,
  tap
} from 'rxjs'
import { HttpClientModule } from '@angular/common/http'
import { TruncatePipe } from './pipes/truncate.pipe'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { MetaService } from './services/meta.service'
import { routes } from './app.routes'
import { Location } from '@angular/common'
import { DeviceDetectorService } from 'ngx-device-detector'
import { ImageComponentModule } from './components/image/image.component'
import { MinPipe } from './pipes/min.pipe'
import { AccessibilityService } from './services/accessibility.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit, OnDestroy {
  platformName = ''
  isTitleSmall= false
  isLandscape = false
  destroy$ = new Subject()
  hasBackButton = false

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private metaS: MetaService,
    private location: Location,
    private deviceS: DeviceDetectorService,
    public accessibilityS: AccessibilityService
  ) {
    afterNextRender(() => {
      this.initPlatformName().then(() => {
        this.setOrientationCSSClass()
      })
    })
  }
  ngOnDestroy(){
    this.destroy$.next(undefined)
    this.destroy$.complete()
  }
  ngOnInit() {
    this.router.events
      .pipe(
        takeUntil(this.destroy$),
        filter((e) => e instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild
          }
          return route
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data),
        tap(({
            description,
            hasBackButton,
            isTitleSmall,
            title
          }) => {
          this.isTitleSmall = isTitleSmall
          this.hasBackButton = hasBackButton
          this.metaS.updateTitle(title)
          this.metaS.updateDescription(description)
        })
      ).subscribe()
  }
  private initPlatformName = async () => {
    switch (true) {
      case this.deviceS.isMobile():
        this.platformName = 'mobile'
        break
      case this.deviceS.isTablet():
        this.platformName = 'tablet'
        break
      default: this.platformName = ''
    }
  }
  private setOrientationCSSClass = () => {
    this.isLandscape = !!this.platformName && (window.innerWidth / window.innerHeight) > 1
  }

  goBack = () => {
    this.location.back()
  }

  onResize = () => {
    this.setOrientationCSSClass()
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HeaderComponent,
    MainMenuComponent,
    BrowserModule,
    HttpClientModule,
    TruncatePipe,
    MinPipe,
    ImageComponentModule,
    RouterModule.forRoot(
      routes,
      {
        preloadingStrategy: PreloadAllModules,
        initialNavigation: 'enabledBlocking',
        scrollPositionRestoration: 'enabled'
      }
    )
  ],
  bootstrap: [AppComponent],
  providers: [
    provideClientHydration()
  ]
})
export class AppModule {}
