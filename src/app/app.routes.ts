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
    loadChildren: () => import('./pages/albums/album-all-list.page').then(m => m.AlbumAllListPageModule),
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
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
]
