import { Directive, ElementRef, AfterViewInit, OnDestroy, Input } from '@angular/core'

@Directive({
  selector: '[appTrapFocus]',
  standalone: true
})
export class TrapFocusDirective implements AfterViewInit, OnDestroy {
  @Input() isTrapFocus = true
  constructor(
    private el: ElementRef
  ) {}

  ngAfterViewInit() {
    this.trapFocus()
  }

  ngOnDestroy() {
    this.clearTrapFocus()
  }

  private clearTrapFocus = () => {
    this.el.nativeElement.removeEventListener('keydown', null, false)
  }

  private trapFocus = () => {
    const focusableEls1: HTMLElement[] = this.el.nativeElement.querySelectorAll(
      'a[href], button, textarea, input:not([type=hidden]), select'
    )
    const focusableEls: HTMLElement[] = Array.from(focusableEls1)
      .filter((el: HTMLElement & { disabled?: boolean }) => !el.disabled)
    const firstFocusableEl: HTMLElement = focusableEls[0]
    const lastFocusableEl: HTMLElement = focusableEls[focusableEls.length - 1]

    this.el.nativeElement.addEventListener('keydown', (e: Event & { keyCode: number, shiftKey: boolean }) => {
      const isTabPressed = e.keyCode === 9
      if (!this.isTrapFocus) {
        this.clearTrapFocus()
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
