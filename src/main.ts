import { AppComponent } from './app/app.component'
import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser'
import { routes } from './app/app.routes'
import {
  PreloadAllModules,
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withInMemoryScrolling,
  withPreloading
} from '@angular/router'
import { provideHttpClient } from '@angular/common/http'

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled'
      }),
      withPreloading(PreloadAllModules),
      withEnabledBlockingInitialNavigation()
    ),
    provideClientHydration(),
    provideHttpClient()
  ]
}).catch(err => console.error(err))
