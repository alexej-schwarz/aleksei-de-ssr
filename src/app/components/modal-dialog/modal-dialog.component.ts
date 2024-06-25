import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  Input,
  Renderer2
} from '@angular/core'
import { ModalService } from '../../services/modal.service'
import { DOCUMENT, AsyncPipe } from '@angular/common'
import { AutoFocusDirective } from '../../directives/auto-focus.directive'

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AutoFocusDirective, AsyncPipe]
})
export class ModalDialogComponent {
  @HostListener('document:keydown.escape') onKeydownHandler() {
    this.closeModal()
  }
  @Input() title = ''
  #document = inject(DOCUMENT)
  modalS = inject(ModalService)
  #renderer = inject(Renderer2)
  constructor() {
    if (this.modalS.isOpen()) {
      this.#renderer.addClass(this.#document.body, 'modal-open')
    }
  }

  closeModal = () => {
    this.#renderer.removeClass(this.#document.body, 'modal-open')
    this.modalS.triggerEl()?.focus()
    this.modalS.triggerEl.set(null)
    this.modalS.content.set(null)
    this.modalS.isOpen.set(false)
  }
}

