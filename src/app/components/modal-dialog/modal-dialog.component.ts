import { Component, Inject, Input, NgModule, OnDestroy, Renderer2 } from '@angular/core'
import { ModalService } from '../../services/modal.service'
import { Subject } from 'rxjs'
import { CommonModule, DOCUMENT } from '@angular/common'
import { AutoFocusDirective } from '../../directives/auto-focus.directive'

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent implements OnDestroy {
  @Input() title = ''
  destroy$ = new Subject()
  isOpen$ = this.modalS.isOpen$
  constructor(
    private modalS: ModalService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) {
    this.renderer.addClass(_document.body, 'modal-open')
  }

  closeModal = () => {
    this.modalS.isOpen$.next(false)
  }

  ngOnDestroy() {
    this.destroy$.next(undefined)
    this.destroy$.complete()
    this.renderer.removeClass(this._document.body, 'modal-open')
  }
}
@NgModule({
  imports: [CommonModule, AutoFocusDirective],
  declarations: [ModalDialogComponent],
  exports: [ModalDialogComponent]
})
export class ModalDialogComponentModule {}
