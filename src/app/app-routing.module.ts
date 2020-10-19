import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
