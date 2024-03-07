import { Component, HostListener, Input } from '@angular/core'
import { IconComponent } from '../../icon/icon.component'
import { NgIf } from '@angular/common'
import { TrapFocusDirective } from '../../../directives/trap-focus.directive'

@Component({
  selector: 'app-popup-menu',
  templateUrl: './popup-menu.component.html',
  styleUrls: ['./popup-menu.component.scss'],
  imports: [
    IconComponent,
    NgIf,
    TrapFocusDirective
  ],
  standalone: true
})
export class PopupMenuComponent {
  @Input() id!: string
  @Input() isExpanded = false
  @Input() iconName? = ''
  @Input() label? = ''
  @Input() srOnlyText? = ''
  @HostListener('document:keydown.escape') onKeydownHandler() {
    this.closeMenu()
  }
  closeMenu = () => {
    this.isExpanded = false
  }
  toggleMenu = () => {
    this.isExpanded = !this.isExpanded
  }
}
