import { Injectable, signal, WritableSignal } from '@angular/core'

import { Album, AlbumDescription, Track } from '../types/album.type'

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  getAlbumByIdAsSignal = (albumId: string) => {
    const initialAlbum = { author: '', id: '', coverImageSrc: '', releaseYear: 0, title: '' }
    const allAlbum: Album[] = []
    const albumSignal: WritableSignal<Album> = signal(initialAlbum)
    import('../data/audio/album').then(album => {
      Object.values(album).forEach(albumList => {
        if (albumList) {
          allAlbum.push(...albumList)
        }
      })
        albumSignal.set(allAlbum.find(album => album.id === albumId) ?? initialAlbum)
    })
    return albumSignal
  }

  getAlbumPlaylistByIdAsSignal = (albumId: string) => {
    const playListAsSignal: WritableSignal<Track[]> = signal([])
    import('../data/audio/playlist').then(tracks => {
        playListAsSignal.set(this.#findEntryById(tracks, albumId))
    })
    return playListAsSignal
  }
  getAlbumDescriptionByIdAsSignal = (albumId: string) => {
    const descriptionAsSignal: WritableSignal<AlbumDescription | undefined> = signal(undefined)
    import('../data/audio/album-description').then(albumDescription => {
      descriptionAsSignal.set(this.#findEntryById(albumDescription, albumId))
    })
    return descriptionAsSignal
  }
  getSortByDateAlbumList = (albumList: Album[]) => albumList.sort((a, b) => b.releaseYear - a.releaseYear)
  #findEntryById = (obj: object, id: string) => Object.entries(obj).find(
    entry => entry[0] === id.replace(/-/g,'_').toUpperCase()
  )?.[1]
}
