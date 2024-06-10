import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild
} from '@angular/core'
import { YoutubeService } from '../../services/youtube.service'
import { YouTubePlayerModule } from '@angular/youtube-player'
import { MinPipe } from '../../pipes/min.pipe'

@Component({
    selector: 'app-youtube-player',
    templateUrl: './youtube-player.component.html',
    styleUrls: ['./youtube-player.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [YouTubePlayerModule, MinPipe]
})
export class YouTubePlayerComponent {
  @Input() videoId = ''
  @Input() autoplay? = false
  @ViewChild('youtubePlayer') youtubePlayer?: ElementRef
  constructor(
    private youTubeS: YoutubeService,
  ) {
    afterNextRender(() => {
      this.youTubeS.loadFrameApiScript()
    })
  }
}
