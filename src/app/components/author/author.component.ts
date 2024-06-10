import { Component, Input } from '@angular/core'
import { NgIf } from '@angular/common'
import { Author } from '../../types/album.type'

@Component({
    selector: 'app-author',
    templateUrl: './author.component.html',
    styleUrls: ['./author.component.scss'],
    standalone: true,
    imports: [NgIf]
})
export class AuthorComponent {
  @Input() author?: Author
}

