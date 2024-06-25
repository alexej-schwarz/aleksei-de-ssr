import {
  Directive,
  ElementRef,
  inject,
  OnInit
} from '@angular/core'

@Directive({
  selector: '[appAutofocus]',
  standalone: true
})
export class AutoFocusDirective implements OnInit {
  #elementRef = inject(ElementRef)
  async ngOnInit () {
    if (!this.#elementRef.nativeElement['focus']) {
      throw new Error('Element does not accept focus.')
    }
    const element: HTMLInputElement = this.#elementRef.nativeElement as HTMLInputElement
    element.focus()
  }
}
