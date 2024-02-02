import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core'
import { ActivatedRoute, RouterModule } from '@angular/router'
import { combineLatest, concatMap, map } from 'rxjs'
import { ImageComponentModule } from '../../../components/image/image.component'
import { AudioComponentModule } from '../../../components/audio/audio.component'
import { AuthorComponentModule } from '../../../components/author/author.component'
import { AlbumService } from '../../../services/album.service'
@Component({
  selector: 'app-album-details',
  templateUrl: 'album-details.component.html',
  styleUrls: ['album-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlbumDetailsComponent {
  albumDetails$ = this.route.paramMap.pipe(
    concatMap((params) => {
      const id = params.get('id') as string
      return combineLatest([
        this.albumService.getAlbumById(id),
        this.albumService.getAlbumPlaylistById(id),
        this.albumService.getAlbumDescriptionById(id)
      ])
    }),
    map(([album, tracks, description]) => (
      { ...album, tracks, description: [], ...description })
    )
  )

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}
}
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AlbumDetailsComponent
      },
    ]),
    ImageComponentModule,
    ImageComponentModule,
    AudioComponentModule,
    AuthorComponentModule
  ],
  declarations: [AlbumDetailsComponent]
})
export class AlbumDetailsComponentModule {}
