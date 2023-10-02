import { CommonModule, NgOptimizedImage } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  NgModule
} from '@angular/core'
import { RouterModule } from '@angular/router'
import { AlbumService } from '../../shared/data-access/album-service'
import { ImageComponentModule } from '../../shared/ui/image/image.component'
import { AlbumListComponent } from './album-list/album-list.component'
import { ALBUM_LIST_DATA_1, ALBUM_LIST_DATA_2 } from '../../shared/data-access/album-data'
import { combineLatest, map } from 'rxjs'
import { TruncatePipeModule } from '../../shared/pipes/truncate.pipe'

@Component({
  selector: 'app-album-all',
  templateUrl: 'album-all.component.html',
  styleUrls: ['album-all.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlbumAllComponent {
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
        component: AlbumAllComponent
      },
    ]),
    ImageComponentModule,
    TruncatePipeModule
  ],
  declarations: [
    AlbumAllComponent,
    AlbumListComponent
  ]
})
export class AlbumAllComponentModule {}
