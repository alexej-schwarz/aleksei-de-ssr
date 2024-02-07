import { CommonModule, NgOptimizedImage } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  NgModule
} from '@angular/core'
import { RouterModule } from '@angular/router'
import { AlbumService } from '../../services/album.service'
import { ImageComponentModule } from '../../components/image/image.component'
import { combineLatest, map } from 'rxjs'
import { TruncatePipe } from '../../pipes/truncate.pipe'
import { ALBUM_LIST_DATA_1, ALBUM_LIST_DATA_2 } from '../../data/audio/album'

@Component({
  selector: 'app-album-all',
  templateUrl: 'album-list.page.html',
  styleUrls: ['album-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  // trackByFn: any = (index: number, item: Album[]) => item.id
  constructor(
    private albumS: AlbumService
  ) {}
}
@NgModule({
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterModule.forChild([
      {
        path: '',
        component: AlbumListPage
      },
    ]),
    ImageComponentModule,
    TruncatePipe
  ],
  declarations: [
    AlbumListPage
  ]
})
export class AlbumListPageModule {}
