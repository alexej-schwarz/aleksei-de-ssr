import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  NgModule,
  ViewChild
} from '@angular/core'
import { YoutubeService } from '../../services/youtube.service'
import { CommonModule } from '@angular/common'
import { YouTubePlayerModule } from '@angular/youtube-player'
import { MinPipe } from '../../pipes/min.pipe'

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

@NgModule({
  imports: [CommonModule, YouTubePlayerModule, MinPipe],
  declarations: [YouTubePlayerComponent],
  exports: [YouTubePlayerComponent]
})
export class YouTubePlayerComponentModule {}
