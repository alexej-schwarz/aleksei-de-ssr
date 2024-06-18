import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HeaderComponent } from './components/header/header.component'
import {
  filter,
  map,
  mergeMap,
  Subject,
  takeUntil,
  tap
} from 'rxjs'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { MetaService } from './services/meta.service'
import { Location } from '@angular/common'
import { DeviceDetectorService } from 'ngx-device-detector'
import { AccessibilityService } from './services/accessibility.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    RouterOutlet
  ],
  standalone: true
})

export class AppComponent implements OnInit, OnDestroy {
  #activatedRoute = inject(ActivatedRoute)
  #deviceS = inject(DeviceDetectorService)
  #location = inject(Location)
  #metaS = inject(MetaService)
  #router = inject(Router)
  accessibilityS = inject(AccessibilityService)
  #destroy$ = new Subject()
  hasBackButton = false
  isLandscape = false
  isTitleSmall= false
  platformName = ''
  ngOnDestroy(){
    this.#destroy$.next(undefined)
    this.#destroy$.complete()
  }
  ngOnInit() {
    this.#initPlatformName().then(() => {
      if (typeof window === 'object') {
        this.setOrientationCSSClass()
      }
    })

    this.#router.events
      .pipe(
        takeUntil(this.#destroy$),
        filter((e) => e instanceof NavigationEnd),
        map(() => this.#activatedRoute),
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
          this.#metaS.updateTitle(title)
          this.#metaS.updateDescription(description)
        })
      ).subscribe()
  }
  #initPlatformName = async () => {
    switch (true) {
      case this.#deviceS.isMobile():
        this.platformName = 'mobile'
        break
      case this.#deviceS.isTablet():
        this.platformName = 'tablet'
        break
      default: this.platformName = ''
    }
  }
  setOrientationCSSClass = () => {
    if(typeof window === 'object') {
      this.isLandscape = !!this.platformName && (window.innerWidth / window.innerHeight) > 1
    }
  }
  goToPreviousPage = () => {
    this.#location.back()
  }
}
