import { AsyncPipe, JsonPipe } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject, Signal
} from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ImageComponent } from '../../../components/image/image.component'
import { AudioComponent } from '../../../components/audio/audio.component'
import { AuthorComponent } from '../../../components/author/author.component'
import { AlbumService } from '../../../services/album.service'
import { toSignal } from '@angular/core/rxjs-interop'
import { Album, AlbumDescription, Track } from '../../../types/album.type'
@Component({
  selector: 'app-album-details',
  templateUrl: 'album-details.component.html',
  styleUrls: ['album-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ImageComponent,
    AudioComponent,
    AuthorComponent,
    AsyncPipe,
    JsonPipe
  ]
})
export class AlbumDetailsComponent {
  #route = inject(ActivatedRoute)
  id = toSignal(this.#route.paramMap)()?.get('id') ?? ''
  #albumS = inject(AlbumService)
  albumAsSignal = this.#albumS.getAlbumByIdAsSignal(this.id)
  playlistAsSignal = this.#albumS.getAlbumPlaylistByIdAsSignal(this.id)
  descriptionAsSignal = this.#albumS.getAlbumDescriptionByIdAsSignal(this.id)
  albumDetailsAsSignal: Signal<Album & AlbumDescription & { tracks: Track[] }> = computed(() => ({
    ...this.albumAsSignal(),
    tracks: this.playlistAsSignal(),
    ...this.descriptionAsSignal()
  }))
}
