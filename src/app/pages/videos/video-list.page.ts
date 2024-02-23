import { CommonModule, NgOptimizedImage } from '@angular/common'
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  NgModule
} from '@angular/core'
import { RouterModule } from '@angular/router'
import { ImageComponentModule } from '../../components/image/image.component'
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
  providers: [CookieService]
})
export class VideoListPage {
  isMobile = this.deviceS.isMobile()
  youtubeCookies = !!this.cookieS.get('youtubde')
  // allVideoList$: Observable<any> =  this.youTubeS.getVideosForChannel('UCvhVy-B6NypHeAFjYK2EmvA', 100)
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
@NgModule({
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterModule.forChild([
      {
        path: '',
        component: VideoListPage
      },
    ]),
    ImageComponentModule,
    TruncatePipe
  ],
  declarations: [
    VideoListPage
  ]
})
export class VideoListPageModule {}
