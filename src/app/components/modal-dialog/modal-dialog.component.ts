import {
  Component,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  Renderer2
} from '@angular/core'
import { ModalService } from '../../services/modal.service'
import { Subject } from 'rxjs'
import { DOCUMENT, NgIf, AsyncPipe } from '@angular/common'
import { AutoFocusDirective } from '../../directives/auto-focus.directive'

@Component({
    selector: 'app-modal-dialog',
    templateUrl: './modal-dialog.component.html',
    styleUrls: ['./modal-dialog.component.scss'],
    standalone: true,
    imports: [NgIf, AutoFocusDirective, AsyncPipe]
})
export class ModalDialogComponent implements OnDestroy {
  @HostListener('document:keydown.escape') onKeydownHandler() {
    this.closeModal()
  }
  @Input() title = ''
  destroy$ = new Subject()
  isOpen$ = this.modalS.isOpen$
  constructor(
    private modalS: ModalService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) {
    this.isOpen$.subscribe(
      (isOpen) => {
        isOpen
          ? this.renderer.addClass(_document.body, 'modal-open')
          : this.resetModal()
      }
    )
  }

  closeModal = () => {
    this.modalS.isOpen$.next(false)
  }

  resetModal = () => {
    this.renderer.removeClass(this._document.body, 'modal-open')
    this.modalS.triggerEl$.value?.focus()
    this.modalS.triggerEl$.next(null)
    this.modalS.content$.next(null)
  }

  ngOnDestroy() {
    this.resetModal()
    this.destroy$.next(undefined)
    this.destroy$.complete()
  }
}

