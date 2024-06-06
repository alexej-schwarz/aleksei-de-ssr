import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild
} from '@angular/core'
import { NgIf } from '@angular/common'

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss'],
  imports: [NgIf],
  standalone: true
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
