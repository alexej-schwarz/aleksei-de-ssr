import { AsyncPipe } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  inject
} from '@angular/core'
import { YoutubeService } from '../../../services/youtube.service'
import { ImageComponent } from '../../../components/image/image.component'
import { TruncatePipe } from '../../../pipes/truncate.pipe'
import { ModalService } from '../../../services/modal.service'
import { ModalDialogComponent } from '../../../components/modal-dialog/modal-dialog.component'
import { YouTubePlayerComponent } from '../../../components/youtube-player/youtube-player.component'
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-video-playlist',
  templateUrl: 'video-playlist.page.html',
  styleUrls: ['video-playlist.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ImageComponent,
    ModalDialogComponent,
    YouTubePlayerComponent,
    AsyncPipe,
    TruncatePipe
  ]
})

export class VideoPlaylistPage {
  #cookieS = inject(CookieService)
  #youTubeS = inject(YoutubeService)
  modalS = inject(ModalService)
  platformName = ''
  videoList$ = this.#youTubeS.getPlaylistVideosForChannel(
    this.#cookieS.get('videoPlaylistId') ?? '',
    100
  )
  title = this.#youTubeS.currentVideoPlaylist?.title ?? this.#cookieS.get('videoPlaylistTitle' ?? '')
  description = this.#youTubeS.currentVideoPlaylist?.description ?? this.#cookieS.get('videoPlaylistDescription') ?? ''
  openModal = (triggerEl: HTMLElement | null, modalContent: object) => {
    this.modalS.content.set(modalContent)
    this.modalS.triggerEl.set(triggerEl)
    this.modalS.isOpen.set(true)
  }
}

