import { AsyncPipe } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { YoutubeService } from '../../../services/youtube.service'
import { ImageComponent } from '../../../components/image/image.component'
import { TruncatePipe } from '../../../pipes/truncate.pipe'
import { ModalService } from '../../../services/modal.service'
import { ModalDialogComponent } from '../../../components/modal-dialog/modal-dialog.component'
import { DeviceDetectorService } from 'ngx-device-detector'
import { YouTubePlayerComponent } from '../../../components/youtube-player/youtube-player.component'

@Component({
    selector: 'app-video-playlist',
    templateUrl: 'video-playlist.page.html',
    styleUrls: ['video-playlist.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [ImageComponent, ModalDialogComponent, YouTubePlayerComponent, AsyncPipe, TruncatePipe]
})
export class VideoPlaylistPage {
  isMobile = this.deviceS.isMobile()
  platformName = ''
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

