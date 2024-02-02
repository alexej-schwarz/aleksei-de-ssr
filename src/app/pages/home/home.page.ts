import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { environment } from '../../../environments/environment'
import { ImageComponentModule } from '../../components/image/image.component'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  imageSrc: string
  constructor() {
    this.imageSrc = `${environment.hostUrl}/assets/alex-schwarz.jpg`
  }
}
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
    ]),
    ImageComponentModule
  ],
  declarations: [HomePage]
})
export class HomeComponentModule {}
