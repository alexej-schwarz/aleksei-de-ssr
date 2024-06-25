import { Component, inject } from '@angular/core'
import { CookieService } from 'ngx-cookie-service'
import { YoutubeService } from '../../services/youtube.service'

@Component({
  selector: 'app-cookie',
  standalone: true,
  imports: [],
  templateUrl: './cookie.component.html',
  styleUrl: './cookie.component.scss'
})
export class CookieComponent {
  #cookieS = inject(CookieService)
  #youTubeS = inject(YoutubeService)

  acceptCookies = () => {
    this.#cookieS.set('youtube', '1')
    this.#youTubeS.cookie.set(true)
    this.#youTubeS.loadFrameApiScript()
    this.#youTubeS.fetchLastVideo()
  }
}
