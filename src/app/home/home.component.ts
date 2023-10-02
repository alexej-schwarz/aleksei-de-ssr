import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { environment } from '../../environments/environment'
import { ImageComponentModule } from '../shared/ui/image/image.component'
@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
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
        component: HomeComponent
      },
    ]),
    ImageComponentModule
  ],
  declarations: [HomeComponent]
})
export class HomeComponentModule {}
