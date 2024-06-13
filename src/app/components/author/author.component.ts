import { Component, Input } from '@angular/core'

import { Author } from '../../types/album.type'

@Component({
    selector: 'app-author',
    templateUrl: './author.component.html',
    styleUrls: ['./author.component.scss'],
    standalone: true,
    imports: []
})
export class AuthorComponent {
  @Input() author?: Author
}

