import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject
} from '@angular/core'
import { RouterLinkActive, RouterLink } from '@angular/router'
import { AlbumService } from '../../services/album.service'
import { ImageComponent } from '../../components/image/image.component'
import { TruncatePipe } from '../../pipes/truncate.pipe'
import { ALBUM_LIST_DATA_1, ALBUM_LIST_DATA_2 } from '../../data/audio/album'
import { DeviceDetectorService } from 'ngx-device-detector'

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
    TruncatePipe
  ]
})
export class AlbumListPage {
  #deviceS = inject(DeviceDetectorService)
  isMobile = this.#deviceS.isMobile()
  #albumS = inject(AlbumService)

  albumList = computed(() => [
    { title: 'Сольные альбомы', list: this.#albumS.getSortByDateAlbumList(ALBUM_LIST_DATA_1) },
    { title: 'Aльбомы с моим участием', list: this.#albumS.getSortByDateAlbumList(ALBUM_LIST_DATA_2) }
  ])
}
