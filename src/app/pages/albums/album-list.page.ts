import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core'
import { AlbumService } from '../../services/album.service'
import { combineLatest, map } from 'rxjs'
import { ALBUM_LIST_DATA_1, ALBUM_LIST_DATA_2 } from '../../data/audio/album'
import { AsyncPipe, NgForOf, NgIf } from '@angular/common'
import { TruncatePipe } from '../../pipes/truncate.pipe'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { ImageComponent } from '../../components/image/image.component'

@Component({
  selector: 'app-album-all',
  templateUrl: 'album-list.page.html',
  styleUrls: ['album-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AsyncPipe,
    NgIf,
    TruncatePipe,
    RouterLink,
    ImageComponent,
    NgForOf,
    RouterLinkActive
  ],
  standalone: true
})
export class AlbumListPage {
  albumListSchwarz$ = this.albumS.getPreparedAlbumListWithDescription(ALBUM_LIST_DATA_1)
  albumListOther$ = this.albumS.getPreparedAlbumListWithDescription(ALBUM_LIST_DATA_2)

  vm$ = combineLatest([
    this.albumListSchwarz$,
    this.albumListOther$
  ]).pipe(
    map(([
      albumListSchwarz,
      albumListOther
    ]) => {
      return [
        { title: 'Сольные альбомы', list: albumListSchwarz },
        { title: 'Aльбомы с моим участием', list: albumListOther }
      ]
    })
  )
  constructor(
    private albumS: AlbumService
  ) {}
}
