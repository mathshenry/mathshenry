import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FastReaderPageComponent } from './pages/fast-reader-page/fast-reader-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'fast-reader',
    component: FastReaderPageComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
