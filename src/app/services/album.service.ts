import { Album, AlbumDescription, Track } from '../models/album'
import { Injectable } from '@angular/core'
import {
  BehaviorSubject,
  from,
  map,
  of,
  Subject,
  tap
} from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor() {}
  getAlbumById = (albumId: string) => {
    const allAlbum: Album[] = []
    const allAlbum$: Subject<Album | undefined> = new Subject()

    import('../shared/data-access/album-data').then(album => {
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
    import('../shared/data-access/playlist-data').then(tracks => {
      playList$.next(this.findEntryById(tracks, albumId))
    })
    return playList$
  }
  getAlbumDescriptionById = (albumId: string) => {
    const description$: Subject<AlbumDescription | undefined> = new Subject()
    import('../shared/data-access/album-description-data').then(descriptions => {
      description$.next(this.findEntryById(descriptions, albumId))
    })
    return description$
  }
  getPreparedAlbumList = (albumListDataArray: Album[]) => of(albumListDataArray).pipe(
    map(albumList => {
      const albumListFixed = albumList
        .sort((a, b) => b.releaseYear - a.releaseYear)
        .filter(album => album.fixed)
      const albumListWithoutFixed = albumList.filter(album => !album.fixed)
      return [...albumListFixed, ...albumListWithoutFixed]
    })
  )
  getPreparedAlbumListWithDescription = (albumListDataArray: Album[]) => {
    const albumList$: BehaviorSubject<Album[]> = new BehaviorSubject([
      { id: '' , author: '', title: '', coverImageSrc: '', releaseYear: 0 }
    ])
    const albumFromList = from(albumListDataArray).pipe(
      tap(album => {
        const descriptionById = this.getAlbumDescriptionById(album.id).pipe(
          tap(description => {
            const albumWithDescription = { ...album, description: description?.description }
            if (albumList$.value[0].id) {
              albumList$.next([ ...albumList$.value, albumWithDescription ])
            } else {
              albumList$.next([ albumWithDescription ])
            }
          })
        )
        descriptionById.subscribe()
      })
    )
    albumFromList.subscribe()
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
