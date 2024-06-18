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
  #el = inject(ElementRef)
  async ngOnInit () {
    if (!this.#el.nativeElement['focus']) {
      throw new Error('Element does not accept focus.')
    }
    const element: HTMLInputElement = this.#el.nativeElement as HTMLInputElement
    element.focus()
  }
}
