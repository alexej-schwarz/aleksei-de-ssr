import { inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { BehaviorSubject, take, tap } from 'rxjs'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  #apiKey = environment.youTubeApiKey
  #apiUrl = 'https://www.googleapis.com/youtube/v3'
  #iframeApiUrl = 'https://www.youtube.com/iframe_api'
  #isFrameApiScriptLoaded = false
  currentVideoPlaylist: { id: string, title?: string, description?: string } | null = null
  allVideoPlaylist$: BehaviorSubject<any> = new BehaviorSubject(null)
  lastVideo$: BehaviorSubject<any> = new BehaviorSubject(null)
  http = inject(HttpClient)

  loadFrameApiScript = (): void => {
    if (!this.#isFrameApiScriptLoaded && typeof document !== 'undefined') {
      const tag = document.createElement('script')
      tag.src = this.#iframeApiUrl
      document.body.appendChild(tag)
      this.#isFrameApiScriptLoaded = true
    }
  }

  fetchLastVideo = (channel: string) => {
    const url = `${this.#apiUrl}/search?key=${this.#apiKey}&channelId=${channel}&order=date&part=snippet&type=video,id&maxResults=1&order=date`
    this.http.get(url).pipe(
      take(1),
      tap((res: any) => {
        this.lastVideo$.next(res.items)
      })
    ).subscribe()
  }

  getPlaylistVideosForChannel = (channel: string, playlistId: string, maxResults: string | number) => {
    const url = `${this.#apiUrl}/playlistItems?key=${this.#apiKey}&channelId=${channel}&playlistId=${playlistId}&order=date&part=snippet,contentDetails&maxResults=${maxResults}`
    return playlistId ? this.http.get(url).pipe(map((res: any) => res.items)) : null
  }

  fetchAllPlaylistForChannel = (channel: string, maxResults: string | number) => {
    const url = `
    ${this.#apiUrl}/playlists?key=${this.#apiKey}&channelId=${channel}&order=date&part=snippet,contentDetails&maxResults=${maxResults}`
    this.http.get(url).pipe(
      take(1),
      tap((res: any) => {
        this.allVideoPlaylist$.next(res.items)
      })
    ).subscribe()
  }
}
