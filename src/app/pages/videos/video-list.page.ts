import {
  NgIf,
  NgFor,
  AsyncPipe
} from '@angular/common'
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component
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
      NgIf,
      NgFor,
      RouterLinkActive,
      RouterLink,
      ImageComponent,
      AsyncPipe,
      TruncatePipe
    ]
})
export class VideoListPage {
  isMobile = this.deviceS.isMobile()
  youtubeCookies = !!this.cookieS.get('youtubde')
  allPlayList$ = this.youTubeS.allVideoPlaylist$
  constructor(
    private deviceS: DeviceDetectorService,
    private youTubeS: YoutubeService,
    private cookieS: CookieService
  ) {
    registerLocaleData(LOCALE_RU)
    youTubeS.currentVideoPlaylist = null
    if (this.youtubeCookies) {
      if (!youTubeS.allVideoPlaylist$.value) {
        youTubeS.fetchAllPlaylistForChannel('UCvhVy-B6NypHeAFjYK2EmvA', 100)
      }
      afterNextRender(this.youTubeS.loadFrameApiScript)
    }
  }

  acceptCookies = () => {
    this.cookieS.set('youtubde', '1')
    this.youtubeCookies = true
    this.youTubeS.fetchAllPlaylistForChannel('UCvhVy-B6NypHeAFjYK2EmvA', 100)
    this.youTubeS.loadFrameApiScript()
  }

  setCurrentVideoPlaylistId = (playlist: any) => {
    this.youTubeS.currentVideoPlaylist = {
      id: playlist.id,
      title: playlist.snippet.title,
      description: playlist.snippet.description,
    }
  }
}

