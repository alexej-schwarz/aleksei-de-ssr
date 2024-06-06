import { AsyncPipe, NgIf } from '@angular/common'
import { afterNextRender, ChangeDetectionStrategy, Component } from '@angular/core'
import { environment } from '../../../environments/environment'
import { ImageComponent } from '../../components/image/image.component'
import { YoutubeService } from '../../services/youtube.service'
import { ModalService } from '../../services/modal.service'
import { ModalDialogComponent } from '../../components/modal-dialog/modal-dialog.component'
import { YouTubePlayerComponent } from '../../components/youtube-player/youtube-player.component'
import { CookieService } from 'ngx-cookie-service'
import { DeviceDetectorService } from 'ngx-device-detector'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ImageComponent,
    AsyncPipe,
    ModalDialogComponent,
    YouTubePlayerComponent,
    NgIf
  ],
  standalone: true
})
export class HomePage {
  isMobile = this.deviceS.isMobile()
  imageSrc: string
  lastVideo$ = this.youTubeS.lastVideo$
  isModalOpen$ = this.modalS.isOpen$
  modalContent$ = this.modalS.content$
  modalTriggerEl$ = this.modalS.triggerEl$
  youtubeCookies = !!this.cookieS.get('youtubde')
  constructor(
    private deviceS: DeviceDetectorService,
    public youTubeS: YoutubeService,
    private modalS: ModalService,
    private cookieS: CookieService
  ) {
    this.imageSrc = `${environment.hostUrl}/assets/alex-schwarz-2.jpg`
    if (this.youtubeCookies) {
      if (!youTubeS.lastVideo$.value) {
        youTubeS.fetchLastVideo('UCvhVy-B6NypHeAFjYK2EmvA')
      }
      afterNextRender(this.youTubeS.loadFrameApiScript)
    }
  }

  openModal = (triggerEl: HTMLElement | null, modalContent: object) => {
    this.modalS.content$.next(modalContent)
    this.modalS.isOpen$.next(true)
    this.modalS.triggerEl$.next(triggerEl)
  }

  acceptCookies = () => {
    this.cookieS.set('youtubde', '1')
    this.youtubeCookies = true
    this.youTubeS.loadFrameApiScript()
    this.youTubeS.fetchLastVideo('UCvhVy-B6NypHeAFjYK2EmvA')
  }
}
