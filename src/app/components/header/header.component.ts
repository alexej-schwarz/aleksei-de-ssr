import { Component, inject } from '@angular/core'
import { PopupMenuComponent } from './popup-menu/popup-menu.component'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { AccessibilityService } from '../../services/accessibility.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    PopupMenuComponent,
    RouterLink,
    RouterLinkActive
  ],
  standalone: true
})
export class HeaderComponent {
  accessibilityS = inject(AccessibilityService)
}
