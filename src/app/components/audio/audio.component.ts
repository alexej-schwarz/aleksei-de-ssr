import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  NgModule,
  OnDestroy,
  ViewChild
} from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements AfterViewInit, OnDestroy {
  @Input() src: string | undefined | unknown
  audio: HTMLAudioElement | undefined
  @ViewChild('audioElement') set playerRef(ref: ElementRef<HTMLAudioElement>) {
    this.audio = ref.nativeElement
  }
  constructor() {}
  pauseAllAudios = (e: Event) => {
    document.querySelectorAll('audio')
      .forEach(item => {
        if (item !== e?.target) item.pause()
      })
  }
  ngAfterViewInit() {
    if (this.audio) {
      this.audio.addEventListener('play', this.pauseAllAudios)
    }
  }
  ngOnDestroy() {
    if (this.audio) {
      this.audio.removeEventListener('play', this.pauseAllAudios)
    }
  }
}
@NgModule({
  imports: [CommonModule],
  declarations: [AudioComponent],
  exports: [AudioComponent]
})
export class AudioComponentModule {}
