import { AsyncPipe, JsonPipe } from '@angular/common'
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  inject
} from '@angular/core'
import { environment } from '../../../environments/environment'
import { ImageComponent } from '../../components/image/image.component'
import { YoutubeService } from '../../services/youtube.service'
import { ModalService } from '../../services/modal.service'
import { ModalDialogComponent } from '../../components/modal-dialog/modal-dialog.component'
import { YouTubePlayerComponent } from '../../components/youtube-player/youtube-player.component'
import { CookieComponent } from '../../components/cookie/cookie.component'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ImageComponent,
    ModalDialogComponent,
    YouTubePlayerComponent,
    AsyncPipe,
    CookieComponent,
    JsonPipe
  ]
})
export class HomePage {
  modalS = inject(ModalService)
  imageSrc = `${environment.hostUrl}/assets/alex-schwarz-2.jpg`
  #youTubeS = inject(YoutubeService)
  cookie = this.#youTubeS.cookie
  lastVideo = this.#youTubeS.lastVideo

  constructor() {
    if (this.cookie()) {
      if (!this.#youTubeS.lastVideo().length) {
        this.#youTubeS.fetchLastVideo()
      }
      afterNextRender(this.#youTubeS.loadFrameApiScript)
    }
  }

  openModal = (triggerEl: HTMLElement | null, modalContent: object) => {
    this.modalS.content.set(modalContent)
    this.modalS.isOpen.set(true)
    this.modalS.triggerEl.set(triggerEl)
  }
}
