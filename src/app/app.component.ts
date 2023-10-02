import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  NgModule,
  OnDestroy,
  OnInit,
  Output,
  Renderer2
} from '@angular/core'
import { BrowserModule, provideClientHydration } from '@angular/platform-browser'
import { Data, PreloadAllModules, RouterModule } from '@angular/router'
import { MainMenuComponent } from './ui/header/main-menu/main-menu.component'
import { HeaderComponent } from './ui/header/header.component'
import { Platform } from '@ionic/angular'
import {
  debounceTime,
  filter, map, mergeMap,
  Subject,
  takeUntil,
  tap
} from 'rxjs'
import { pluck } from 'rxjs/operators'
import { HttpClientModule } from '@angular/common/http'
import { TruncatePipeModule } from './shared/pipes/truncate.pipe'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { MetaService } from './shared/data-access/meta/meta-service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  @Output() test = new EventEmitter<string>()
  title = 'app-root'
  platformName = ''
  destroy$ = new Subject()
  constructor(
    public platform: Platform,
    private element: ElementRef,
    private renderer: Renderer2,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private metaService: MetaService
  ) {}
  ngOnDestroy(){
    this.destroy$.next(undefined)
    this.destroy$.complete()
  }
  ngOnInit() {
    this.initPlatformName().then(() => {
      this.renderer.addClass(this.element.nativeElement, this.platformName)
      this.setOrientationCSSClass()
      this.platform.resize.pipe(
        debounceTime(100),
        takeUntil(this.destroy$)
      ).subscribe( () => {
        this.setOrientationCSSClass()
      })
    })
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild
          }
          return route
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data),
        tap(({ title,description }: Data) => {
          this.metaService.updateTitle(title)
          this.metaService.updateDescription(description)
        })
      ).subscribe()
  }
  private initPlatformName = async () => {
    const width = this.platform.width()
    this.platformName = 'desktop'
    if (this.platform.is('mobile')) {
      this.platformName = 'tablet'
      /** 912 portrait = Surface Pro 7 (Tablet) */
      /** 915 && landscape = Samsung Galaxy S20 Ultra */
      if (width < 912 || width < 916 && this.platform.isLandscape()) {
        this.platformName = 'mobile'
      }
    }
    if (this.platform.is('tablet')) {
      this.platformName = 'tablet'
    }
  }
  private setOrientationCSSClass = () => {
    this.platform.isLandscape() && this.platformName !== 'desktop'
      ? this.renderer.addClass(this.element.nativeElement, 'landscape')
      : this.renderer.removeClass(this.element.nativeElement, 'landscape')
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TruncatePipeModule,
    RouterModule.forRoot([
    {
      path: 'home',
      loadChildren: () => import('./home/home.component').then(m => m.HomeComponentModule),
      data: {
        title: 'Алексей Шварц',
        description: 'музыкант, композитор, автор песен'
      }
    },
    {
      path: 'albums',
      loadChildren: () => import('./albums/album-all/album-all.component').then(m => m.AlbumAllComponentModule),
      data: {
        title: 'Алексей Шварц - дискография',
        description: 'сольные альбомы и альбомы с участием Алексея Шварца'
      }
    },
    {
      path: 'albums/:id',
      loadChildren: () => import('./albums/album-details/album-details.component').then(m => m.AlbumDetailsComponentModule),
      data: {
        title: 'Алексей Шварц - дискография',
        description: 'сольные альбомы и альбомы с участием Алексея Шварца'
      }
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }
], { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabledBlocking' })
  ],
  providers: [ provideClientHydration() ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
