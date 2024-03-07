import { NgModule } from '@angular/core'
import { ServerModule } from '@angular/platform-server'
import { AppModule, AppComponent } from './app.component'
import { IconComponent } from './components/icon/icon.component'

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    IconComponent
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
