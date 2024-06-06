import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage),
    data: {
      title: 'Алексей Шварц',
      description: 'музыкант, композитор, автор песен'
    }
  },
  {
    path: 'albums',
    loadComponent: () => import('./pages/albums/album-list.page').then(m => m.AlbumListPage),
    data: {
      title: 'Алексей Шварц - дискография',
      description: 'сольные альбомы и альбомы с участием Алексея Шварца'
    },
  },
  {
    path: 'albums/:id',
    loadComponent: () => import('./pages/albums/album-details/album-details.page').then(m => m.AlbumDetailsPage),
    data: {
      title: 'Алексей Шварц - дискография',
      description: 'сольные альбомы и альбомы с участием Алексея Шварца',
      isTitleSmall: true,
      hasBackButton: true
    }
  },
  {
    path: 'videos',
    loadComponent: () => import('./pages/videos/video-list.page').then(m => m.VideoListPage),
    data: {
      title: 'Алексей Шварц - видео',
      description: 'видео с участием Алексея Шварца'
    },
  },
  {
    path: 'videos/playlist',
    loadComponent: () => import('./pages/videos/video-playlist/video-playlist.page').then(m => m.VideoPlaylistPage),
    data: {
      title: 'Алексей Шварц - видео',
      description: 'видео с участием Алексея Шварца',
      isTitleSmall: true,
      hasBackButton: true
    },
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
]
