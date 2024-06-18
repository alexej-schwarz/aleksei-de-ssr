import { AsyncPipe } from '@angular/common'
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  inject
} from '@angular/core'
import { RouterLinkActive, RouterLink } from '@angular/router'
import { ImageComponent } from '../../components/image/image.component'
import { TruncatePipe } from '../../pipes/truncate.pipe'
import { YoutubeService } from '../../services/youtube.service'
import LOCALE_RU from '@angular/common/locales/ru'
import { registerLocaleData } from '@angular/common'
import { CookieService } from 'ngx-cookie-service'
import { DeviceDetectorService } from 'ngx-device-detector'

@Component({
  selector: 'app-video-list',
  templateUrl: 'video-list.page.html',
  styleUrls: ['video-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CookieService],
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    ImageComponent,
    AsyncPipe,
    TruncatePipe
  ]
})
export class VideoListPage {
  #deviceS = inject(DeviceDetectorService)
  #cookieS = inject(CookieService)
  #youTubeS = inject(YoutubeService)
  isMobile = this.#deviceS.isMobile()
  youtubeCookies = !!this.#cookieS.get('youtubde')
  allPlayList$ = this.#youTubeS.allVideoPlaylist$
  constructor() {
    registerLocaleData(LOCALE_RU)
    if (this.youtubeCookies) {
      if (!this.#youTubeS.allVideoPlaylist$.value) {
        this.#youTubeS.fetchAllPlaylistForChannel('UCvhVy-B6NypHeAFjYK2EmvA', 100)
      }
      afterNextRender(this.#youTubeS.loadFrameApiScript)
    }
  }

  acceptCookies = () => {
    this.#cookieS.set('youtubde', '1')
    this.youtubeCookies = true
    this.#youTubeS.fetchAllPlaylistForChannel('UCvhVy-B6NypHeAFjYK2EmvA', 100)
    this.#youTubeS.loadFrameApiScript()
  }

  setCurrentVideoPlaylistId = (playlist: any) => {
    this.#youTubeS.currentVideoPlaylist = {
      id: playlist.id,
      title: playlist.snippet.title,
      description: playlist.snippet.description,
    }
    this.#cookieS.set('videoPlaylistId', playlist.id)
    this.#cookieS.set('videoPlaylistTitle', playlist.snippet.title)
    this.#cookieS.set('videoPlaylistDescription', playlist.snippet.description)
  }
}
