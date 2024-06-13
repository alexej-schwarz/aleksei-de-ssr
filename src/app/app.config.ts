import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'
import {
  PreloadAllModules,
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withInMemoryScrolling,
  withPreloading
} from '@angular/router'

import { routes } from './app.routes'
import { provideClientHydration } from '@angular/platform-browser'
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled'
      }),
      withPreloading(PreloadAllModules),
      withEnabledBlockingInitialNavigation()
    ),
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    provideClientHydration()
  ]
}
