import { NgModule } from '@angular/core'
import { ServerModule } from '@angular/platform-server'

import { AppModule, AppComponent } from './app.component'

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
