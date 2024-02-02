import { CommonModule, NgOptimizedImage } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  NgModule
} from '@angular/core'
import { RouterModule } from '@angular/router'
import { AlbumService } from '../../../services/album.service'
import { ImageComponentModule } from '../../../components/image/image.component'
import { AlbumListComponent } from '../../../components/album-list/album-list.component'
import { combineLatest, map } from 'rxjs'
import { TruncatePipe } from '../../../pipes/truncate.pipe'
import { ALBUM_LIST_DATA_1, ALBUM_LIST_DATA_2 } from '../../../data/album-data'

@Component({
  selector: 'app-album-all',
  templateUrl: 'album-all-list.page.html',
  styleUrls: ['album-all-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlbumAllListPage {
  albumListSchwarz$ = this.albumService.getPreparedAlbumListWithDescription(ALBUM_LIST_DATA_1)
  albumListOther$ = this.albumService.getPreparedAlbumListWithDescription(ALBUM_LIST_DATA_2)

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
    public albumService: AlbumService
  ) {}
}
@NgModule({
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterModule.forChild([
      {
        path: '',
        component: AlbumAllListPage
      },
    ]),
    ImageComponentModule,
    TruncatePipe
  ],
  declarations: [
    AlbumAllListPage,
    AlbumListComponent
  ]
})
export class AlbumAllListPageModule {}
