import {
  Component,
  HostListener, inject,
  Input,
  OnDestroy,
  OnInit,
  Renderer2
} from '@angular/core'
import { ModalService } from '../../services/modal.service'
import { Subject } from 'rxjs'
import { DOCUMENT, AsyncPipe } from '@angular/common'
import { AutoFocusDirective } from '../../directives/auto-focus.directive'

@Component({
    selector: 'app-modal-dialog',
    templateUrl: './modal-dialog.component.html',
    styleUrls: ['./modal-dialog.component.scss'],
    standalone: true,
    imports: [AutoFocusDirective, AsyncPipe]
})
export class ModalDialogComponent implements OnInit, OnDestroy {
  @HostListener('document:keydown.escape') onKeydownHandler() {
    this.closeModal()
  }
  @Input() title = ''
  destroy$ = new Subject()
  #document = inject(DOCUMENT)
  #modalS = inject(ModalService)
  #renderer = inject(Renderer2)
  isOpen$ = this.#modalS.isOpen$
  ngOnInit = () => {
    this.isOpen$.subscribe(
      (isOpen) => {
        isOpen
          ? this.#renderer.addClass(this.#document.body, 'modal-open')
          : this.resetModal()
      }
    )
  }

  closeModal = () => {
    this.#modalS.isOpen$.next(false)
  }

  resetModal = () => {
    this.#renderer.removeClass(this.#document.body, 'modal-open')
    this.#modalS.triggerEl$.value?.focus()
    this.#modalS.triggerEl$.next(null)
    this.#modalS.content$.next(null)
  }

  ngOnDestroy() {
    this.resetModal()
    this.destroy$.next(undefined)
    this.destroy$.complete()
  }
}

