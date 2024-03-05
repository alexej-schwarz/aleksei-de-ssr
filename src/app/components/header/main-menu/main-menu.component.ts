import { Component } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { IconComponent } from '../../icon/icon.component'

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  imports: [
    RouterLinkActive,
    RouterLink,
    IconComponent,
    IconComponent
  ],
  standalone: true
})
export class MainMenuComponent {}
