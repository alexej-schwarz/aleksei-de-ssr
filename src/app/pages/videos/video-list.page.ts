import { AsyncPipe } from '@angular/common'
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  effect,
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
import { CookieComponent } from '../../components/cookie/cookie.component'

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
    TruncatePipe,
    CookieComponent
  ]
})
export class VideoListPage {
  #deviceS = inject(DeviceDetectorService)
  #cookieS = inject(CookieService)
  isMobile = this.#deviceS.isMobile()
  isTablet = this.#deviceS.isTablet()

  constructor(
    public youTubeS: YoutubeService
  ) {
    registerLocaleData(LOCALE_RU)
    if (this.youTubeS.cookie()) {
      afterNextRender(this.youTubeS.loadFrameApiScript)
    }
    effect(() => {
      if (this.youTubeS.cookie() && !this.youTubeS.allVideoPlaylist$.value) {
        this.youTubeS.fetchAllPlaylistForChannel(100)
      }
    })
  }

  setCurrentVideoPlaylistId = (playlist: any) => {
    this.youTubeS.currentVideoPlaylist = {
      id: playlist.id,
      title: playlist.snippet.title,
      description: playlist.snippet.description,
    }
    this.#cookieS.set('videoPlaylistId', playlist.id)
    this.#cookieS.set('videoPlaylistTitle', playlist.snippet.title)
    this.#cookieS.set('videoPlaylistDescription', playlist.snippet.description)
  }
}
