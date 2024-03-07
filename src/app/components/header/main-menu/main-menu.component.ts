import { Component } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { IconComponent } from '../../icon/icon.component'
import { PopupMenuComponent } from '../popup-menu/popup-menu.component'
import { AccessibilityService } from '../../../services/accessibility.service'
import { TrapFocusDirective } from '../../../directives/trap-focus.directive'

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  imports: [
    RouterLinkActive,
    RouterLink,
    IconComponent,
    IconComponent,
    PopupMenuComponent,
    TrapFocusDirective
  ],
  standalone: true
})
export class MainMenuComponent {
  constructor(
    public accessibilityS: AccessibilityService
  ) {
  }
}
