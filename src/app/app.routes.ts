import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.page').then(m => m.HomeComponentModule),
    data: {
      title: 'Алексей Шварц',
      description: 'музыкант, композитор, автор песен'
    }
  },
  {
    path: 'albums',
    loadChildren: () => import('./pages/albums/album-list.page').then(m => m.AlbumListPageModule),
    data: {
      title: 'Алексей Шварц - дискография',
      description: 'сольные альбомы и альбомы с участием Алексея Шварца'
    },
  },
  {
    path: 'albums/:id',
    loadChildren: () => import('./pages/albums/album-details/album-details.component').then(m => m.AlbumDetailsComponentModule),
    data: {
      title: 'Алексей Шварц - дискография',
      description: 'сольные альбомы и альбомы с участием Алексея Шварца',
      isTitleSmall: true,
      hasBackButton: true
    }
  },
  {
    path: 'videos',
    loadChildren: () => import('./pages/videos/video-list.page').then(m => m.VideoListPageModule),
    data: {
      title: 'Алексей Шварц - видео',
      description: 'видео с участием Алексея Шварца'
    },
  },
  {
    path: 'videos/playlist',
    loadChildren: () => import('./pages/videos/video-playlist/video-playlist.page').then(m => m.VideoPlaylistPageModule),
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
