import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
  ChangeDetectorRef,
  inject, AfterViewInit
} from '@angular/core'
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
export class YouTubePlayerComponent implements AfterViewInit {
  @Input() videoId = ''
  @Input() autoplay? = false
  @ViewChild('youtubePlayer') youtubePlayer?: ElementRef<HTMLElement>
  videoWidth: number | undefined
  videoHeight: number | undefined
  #changeDetectorRef = inject(ChangeDetectorRef)

  ngAfterViewInit() {
    this.onResize()
  }

  onResize = () => {
    const youtubePlayer = this.youtubePlayer
      ? this.youtubePlayer
      : { nativeElement: { clientWidth: 1200 } }
    // Automatically expand the video to fit the page up to 16:9
    this.videoWidth = Math.min(youtubePlayer.nativeElement.clientWidth)
    this.videoHeight = this.videoWidth * 0.5625
    this.#changeDetectorRef.detectChanges()
  }
}
