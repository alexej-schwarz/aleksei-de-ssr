import {
  Directive,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  Input,
  inject
} from '@angular/core'

@Directive({
  selector: '[appTrapFocus]',
  standalone: true
})
export class TrapFocusDirective implements AfterViewInit, OnDestroy {
  @Input() isTrapFocus = true
  #elementRef = inject(ElementRef)

  ngAfterViewInit() {
    this.#trapFocus()
  }

  ngOnDestroy() {
    this.#clearTrapFocus()
  }

  #clearTrapFocus = () => {
    this.#elementRef.nativeElement.removeEventListener('keydown', null, false)
  }

  #trapFocus = () => {
    const focusableEls1: HTMLElement[] = this.#elementRef.nativeElement.querySelectorAll(
      'a[href], button, textarea, input:not([type=hidden]), select'
    )
    const focusableEls: HTMLElement[] = Array.from(focusableEls1)
      .filter((el: HTMLElement & { disabled?: boolean }) => !el.disabled)
    const firstFocusableEl: HTMLElement = focusableEls[0]
    const lastFocusableEl: HTMLElement = focusableEls[focusableEls.length - 1]

    this.#elementRef.nativeElement.addEventListener('keydown', (e: Event & { keyCode: number, shiftKey: boolean }) => {
      const isTabPressed = e.keyCode === 9
      if (!this.isTrapFocus) {
        this.#clearTrapFocus()
        return
      }
      if (!isTabPressed) return

      if (e.shiftKey) {
        if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus()
          e.preventDefault()
        }
      } else {
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus()
          e.preventDefault()
        }
      }
    })
  }
}
