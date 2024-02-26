import { CommonModule, NgOptimizedImage } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  NgModule
} from '@angular/core'
import { RouterModule } from '@angular/router'
import { YoutubeService } from '../../../services/youtube.service'
import { ImageComponentModule } from '../../../components/image/image.component'
import { TruncatePipe } from '../../../pipes/truncate.pipe'
import { ModalService } from '../../../services/modal.service'
import { YouTubePlayerModule } from '@angular/youtube-player'
import { ModalDialogComponentModule } from '../../../components/modal-dialog/modal-dialog.component'
import { DeviceDetectorService } from 'ngx-device-detector'
import { YouTubePlayerComponentModule } from '../../../components/youtube-player/youtube-player.component'

@Component({
  selector: 'app-video-playlist',
  templateUrl: 'video-playlist.page.html',
  styleUrls: ['video-playlist.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoPlaylistPage {
  isMobile = this.deviceS.isMobile()
  modalContent$ = this.modalS.content$
  videoList$ = this.youTubeS.getPlaylistVideosForChannel(
    'UCvhVy-B6NypHeAFjYK2EmvA',
    this.youTubeS.currentVideoPlaylist?.id ?? '',
    100
  )
  title = ''
  description = ''
  isModalOpen$ = this.modalS.isOpen$
  modalTriggerEl$ = this.modalS.triggerEl$
  constructor(
    private deviceS: DeviceDetectorService,
    private youTubeS: YoutubeService,
    private modalS: ModalService
  ) {
    this.title = this.youTubeS.currentVideoPlaylist?.title ?? ''
    this.description = this.youTubeS.currentVideoPlaylist?.description ?? ''
  }
  openModal = (triggerEl: HTMLElement | null, modalContent: object) => {
    this.modalS.content$.next(modalContent)
    this.modalS.isOpen$.next(true)
    this.modalS.triggerEl$.next(triggerEl)
  }
}
@NgModule({
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterModule.forChild([
      {
        path: '',
        component: VideoPlaylistPage
      },
    ]),
    ImageComponentModule,
    TruncatePipe,
    YouTubePlayerModule,
    YouTubePlayerComponentModule,
    ModalDialogComponentModule,
  ],
  declarations: [
    VideoPlaylistPage
  ]
})
export class VideoPlaylistPageModule {}
