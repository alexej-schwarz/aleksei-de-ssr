import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.component').then(m => m.HomeComponentModule),
    data: {
      title: 'Алексей Шварц',
      description: 'музыкант, композитор, автор песен'
    }
  },
{
    path: 'albums',
    loadChildren: () => import('./pages/album/album-all-list.component').then(m => m.AlbumAllComponentModule),
    data: {
        title: 'Алексей Шварц - дискография',
        description: 'сольные альбомы и альбомы с участием Алексея Шварца'
    }
},
{
    path: 'albums/:id',
    loadChildren: () => import('./pages/album/album-details/album-details.component').then(m => m.AlbumDetailsComponent),
    data: {
        title: 'Алексей Шварц - дискография',
        description: 'сольные альбомы и альбомы с участием Алексея Шварца',
        titleSmall: true
    }
},
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
