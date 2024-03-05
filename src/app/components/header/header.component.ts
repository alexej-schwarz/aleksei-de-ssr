import { Component } from '@angular/core'
import { MainMenuComponent } from './main-menu/main-menu.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    MainMenuComponent
  ],
  standalone: true
})
export class HeaderComponent {}
