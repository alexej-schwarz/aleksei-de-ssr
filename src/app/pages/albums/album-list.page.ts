import { AsyncPipe } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterLinkActive, RouterLink } from '@angular/router'
import { AlbumService } from '../../services/album.service'
import { ImageComponent } from '../../components/image/image.component'
import { combineLatest, map } from 'rxjs'
import { TruncatePipe } from '../../pipes/truncate.pipe'
import { ALBUM_LIST_DATA_1, ALBUM_LIST_DATA_2 } from '../../data/audio/album'

@Component({
    selector: 'app-album-all',
    templateUrl: 'album-list.page.html',
    styleUrls: ['album-list.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
      RouterLinkActive,
      RouterLink,
      ImageComponent,
      AsyncPipe,
      TruncatePipe
    ],
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
