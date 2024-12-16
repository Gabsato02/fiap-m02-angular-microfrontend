import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root/root.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../../../dashboard/src/app/app.module').then(m => m.AppModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../../../auth/src/app/app.module').then(m => m.AppModule)
  },
  {
    path: 'home',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
