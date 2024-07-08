import {
  inject,
  Injectable,
  signal,
  WritableSignal
} from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { from, take, tap } from 'rxjs'
import { environment } from '../../environments/environment'
import { CookieService } from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  #youTubeChannel = 'UCvhVy-B6NypHeAFjYK2EmvA'
  #apiKey = environment.youTubeApiKey
  #apiUrl = 'https://www.googleapis.com/youtube/v3'
  #iframeApiUrl = 'https://www.youtube.com/iframe_api'
  #isFrameApiScriptLoaded = false
  currentVideoPlaylist: { id: string, title?: string, description?: string } | null = null
  http = inject(HttpClient)
  #cookieS = inject(CookieService)
  cookie = signal(!!this.#cookieS.get('youtube'))
  lastVideo: WritableSignal<any> = signal([])
  allVideoPlaylist: WritableSignal<any> = signal(null)

  loadFrameApiScript = (): void => {
    if (!this.#isFrameApiScriptLoaded && typeof document !== 'undefined') {
      const tag = document.createElement('script')
      tag.src = this.#iframeApiUrl
      document.body.appendChild(tag)
      this.#isFrameApiScriptLoaded = true
    }
  }

  fetchLastVideo = () => {
    const url = `${this.#apiUrl}/search?key=${this.#apiKey}&channelId=${this.#youTubeChannel}&order=date&part=snippet&type=video,id&maxResults=1&order=date`
    this.http.get(url).pipe(
      take(1),
      tap((res: any) => {
        this.lastVideo.set(res.items)
      })
    ).subscribe()
  }

  getPlaylistVideosForChannel = (playlistId: string, maxResults: string | number) => {
    const url = `${this.#apiUrl}/playlistItems?key=${this.#apiKey}&channelId=${this.#youTubeChannel}&playlistId=${playlistId}&order=date&part=snippet,contentDetails&maxResults=${maxResults}`
    return playlistId ? this.http.get(url).pipe(map((res: any) => res.items)) : from([])
  }

  fetchAllPlaylistForChannel = (maxResults: string | number) => {
    const url = `
    ${this.#apiUrl}/playlists?key=${this.#apiKey}&channelId=${this.#youTubeChannel}&order=date&part=snippet,contentDetails&maxResults=${maxResults}`
    this.http.get(url).pipe(
      take(1),
      tap((res: any) => {
        this.allVideoPlaylist.set(res.items)
      })
    ).subscribe()
  }
}
