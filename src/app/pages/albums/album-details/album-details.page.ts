import { AsyncPipe, NgForOf, NgIf } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { combineLatest, concatMap, map } from 'rxjs'
import { ImageComponent } from '../../../components/image/image.component'
import { AudioComponent } from '../../../components/audio/audio.component'
import { AuthorComponent } from '../../../components/author/author.component'
import { AlbumService } from '../../../services/album.service'
@Component({
  selector: 'app-album-details',
  templateUrl: 'album-details.page.html',
  styleUrls: ['album-details.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ImageComponent,
    AsyncPipe,
    NgIf,
    NgForOf,
    AudioComponent,
    AuthorComponent
  ],
  standalone: true
})
export class AlbumDetailsPage {
  albumDetails$ = this.route.paramMap.pipe(
    concatMap((params) => {
      const id = params.get('id') as string
      return combineLatest([
        this.albumS.getAlbumById(id),
        this.albumS.getAlbumPlaylistById(id),
        this.albumS.getAlbumDescriptionById(id)
      ])
    }),
    map(([album, tracks, description]) => (
      { ...album, tracks, description: [], ...description })
    )
  )

  constructor(
    private route: ActivatedRoute,
    private albumS: AlbumService
  ) {}
}
