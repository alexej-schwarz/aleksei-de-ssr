import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgModule,
  OnDestroy,
  OnInit,
  Renderer2
} from '@angular/core'
import { BrowserModule, provideClientHydration } from '@angular/platform-browser'
import { Data, PreloadAllModules, RouterModule } from '@angular/router'
import { Platform } from '@ionic/angular'
import { LazyLoadImageModule } from 'ng-lazyload-image'
import {
  BehaviorSubject,
  debounceTime,
  filter, map, mergeMap,
  Subject,
  takeUntil,
  tap
} from 'rxjs'
import { HttpClientModule } from '@angular/common/http'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { routes } from './app.routes';
import { MetaService } from './services/meta.service';
import { TruncatePipeModule } from './pipes/truncate.pipe';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  titleSmall$ = new BehaviorSubject(false)
  allPlatformName = [ 'desktop', 'tablet', 'mobile' ]
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
      this.allPlatformName.forEach(className => {
        this.renderer.removeClass(this.element.nativeElement, className)
      })
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
        tap(({ titleSmall }: Data) => {
          this.titleSmall$.next(!!titleSmall)
        }),
        tap(({ title, description }: Data) => {
          this.metaService.updateTitle(title)
          this.metaService.updateDescription(description)
        })
      ).subscribe()
  }
  private initPlatformName = async () => {
    const width = this.platform.width()
    if (this.platform.is('desktop')) {
      this.platformName = 'desktop'
    }
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

  goBack = () => {

  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TruncatePipeModule,
    LazyLoadImageModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabledBlocking' })
  ],
  providers: [ provideClientHydration() ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
