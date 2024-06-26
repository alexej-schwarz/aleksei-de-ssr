import { Component, Input, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Author } from '../../types/album.type'

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent {
  @Input() author?: Author
}
@NgModule({
  imports: [CommonModule],
  declarations: [AuthorComponent],
  exports: [AuthorComponent]
})
export class AuthorComponentModule {}
