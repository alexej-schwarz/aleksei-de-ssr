import { Injectable } from '@angular/core'
import {
  BehaviorSubject,
  from,
  map,
  of,
  Subject,
  take,
  tap
} from 'rxjs'

import { Album, AlbumDescription, Track } from '../types/album.type'

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor() {}
  getAlbumById = (albumId: string) => {
    const allAlbum: Album[] = []
    const allAlbum$: Subject<Album | undefined> = new Subject()

    import('../data/audio/album').then(album => {
      Object.values(album).forEach(albumList => {
        if (albumList) {
          allAlbum.push(...albumList)
        }
      })
      allAlbum$.next(allAlbum.find(album => album.id === albumId))
    })
    return allAlbum$
  }
  getAlbumPlaylistById = (albumId: string) => {
    const playList$: Subject<Track[] | undefined> = new Subject()
    import('../data/audio/playlist').then(tracks => {
      playList$.next(this.findEntryById(tracks, albumId))
    })
    return playList$
  }
  getAlbumDescriptionById = (albumId: string) => {
    const description$: Subject<AlbumDescription | undefined> = new Subject()
    import('../data/audio/album-description').then(descriptions => {
      description$.next(this.findEntryById(descriptions, albumId))
    })
    return description$
  }
  getPreparedAlbumList = (albumList: Album[]) => of(albumList).pipe(
    map(albumList => {
      const albumListFixed = albumList
        .sort((a, b) => b.releaseYear - a.releaseYear)
        .filter(album => album.fixed)
      const albumListWithoutFixed = albumList.filter(album => !album.fixed)
      return [...albumListFixed, ...albumListWithoutFixed]
    })
  )
  getPreparedAlbumListWithDescription = (albumList: Album[]) => {
    const albumList$: BehaviorSubject<Album[]> = new BehaviorSubject([
      { id: '' , author: '', title: '', coverImageSrc: '', releaseYear: 0 }
    ])
    const albumFromList$ = from(albumList).pipe(
      tap(album => {
        const descriptionById$ = this.getAlbumDescriptionById(album.id).pipe(
          take(1),
          tap(description => {
            const albumWithDescription = { ...album, description: description?.description }
            if (albumList$.value[0].id) {
              albumList$.next([ ...albumList$.value, albumWithDescription ])
            } else {
              albumList$.next([ albumWithDescription ])
            }
          })
        )
        descriptionById$.subscribe()
      })
    )
    albumFromList$.subscribe()
    return albumList$.pipe(
      map(albumList => {
        const albumListFixed = albumList
          .sort((a, b) => b.releaseYear - a.releaseYear)
          .filter(album => album.fixed)
        const albumListWithoutFixed = albumList.filter(album => !album.fixed)
        return [...albumListFixed, ...albumListWithoutFixed]
      })
    )
  }
  private findEntryById = (obj: object, id: string) => Object.entries(obj).find(
    entry => entry[0] === id.replace(/-/g,'_').toUpperCase()
  )?.[1]
}
