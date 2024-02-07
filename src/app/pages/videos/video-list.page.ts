import { CommonModule, NgOptimizedImage } from '@angular/common'
import {
    ChangeDetectionStrategy,
    Component,
    NgModule
} from '@angular/core'
import { RouterModule } from '@angular/router'
import { ImageComponentModule } from '../../components/image/image.component'
import { TruncatePipe } from '../../pipes/truncate.pipe'

@Component({
    selector: 'app-video-list',
    templateUrl: 'video-list.page.html',
    styleUrls: ['video-list.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoListPage {
    constructor() {}
}
@NgModule({
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterModule.forChild([
      {
        path: '',
        component: VideoListPage
      },
    ]),
    ImageComponentModule,
    TruncatePipe
  ],
  declarations: [
    VideoListPage
  ]
})
export class VideoListPageModule {}
