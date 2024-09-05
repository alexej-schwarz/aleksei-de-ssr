import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  WritableSignal
} from '@angular/core'
import { RouterLinkActive, RouterLink } from '@angular/router'
import { ImageComponent } from '../../components/image/image.component'
import { TruncatePipe } from '../../pipes/truncate.pipe'
import { YoutubeService } from '../../services/youtube.service'
import LOCALE_RU from '@angular/common/locales/ru'
import { registerLocaleData } from '@angular/common'
import { CookieService } from 'ngx-cookie-service'
import { DeviceDetectorService } from 'ngx-device-detector'
import { CookieComponent } from '../../components/cookie/cookie.component'
import { YoutubeVideoPlayList } from '../../types/album.type'

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
    TruncatePipe,
    CookieComponent
  ]
})
export class VideoListPage {
  #deviceS = inject(DeviceDetectorService)
  #cookieS = inject(CookieService)
  isMobile = this.#deviceS.isMobile()
  isTablet = this.#deviceS.isTablet()
  #youTubeS = inject(YoutubeService)
  cookie = this.#youTubeS.cookie
  allVideoPlaylist: WritableSignal<YoutubeVideoPlayList[] | null> = this.#youTubeS.allVideoPlaylist

  constructor() {
    registerLocaleData(LOCALE_RU)
    if (this.cookie()) {
      afterNextRender(this.#youTubeS.loadFrameApiScript)
    }
    effect(() => {
      if (this.cookie() && !this.allVideoPlaylist()) {
        this.#youTubeS.fetchAllPlaylistForChannel(100)
      }
    })
  }

  setCurrentVideoPlaylistId = ({ id, snippet }: YoutubeVideoPlayList) => {
    const title = snippet?.title ?? ''
    const description = snippet?.description ?? ''
    this.#youTubeS.currentVideoPlaylist = { id, title, description }
    this.#cookieS.set('videoPlaylistId', id)
    this.#cookieS.set('videoPlaylistTitle', title)
    this.#cookieS.set('videoPlaylistDescription', description)
  }
}
