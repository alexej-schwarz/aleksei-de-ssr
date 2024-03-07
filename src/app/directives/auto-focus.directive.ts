import { Directive, ElementRef, OnInit } from '@angular/core'

@Directive({
  selector: '[appAutofocus]',
  standalone: true
})
export class AutoFocusDirective implements OnInit {
  constructor(
    private el: ElementRef
  ) {
    if (!el.nativeElement['focus']) {
      throw new Error('Element does not accept focus.')
    }
  }

  async ngOnInit () {
    const element: HTMLInputElement = this.el.nativeElement as HTMLInputElement
    element.focus()
  }
}
