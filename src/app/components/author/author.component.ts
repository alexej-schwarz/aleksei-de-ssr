import { Component, Input, NgModule } from '@angular/core'
import { Author } from '../../models/album'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent {
  @Input() author?: Author
  constructor() {}
}
@NgModule({
  imports: [CommonModule],
  declarations: [AuthorComponent],
  exports: [AuthorComponent]
})
export class AuthorComponentModule {}
