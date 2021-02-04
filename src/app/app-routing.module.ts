import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllFavoritesComponent } from './all-favorites/all-favorites.component';
import { HomeComponent } from './home/home.component';
import { SingleCatComponent } from './single-cat/single-cat.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'cats/:id', component: SingleCatComponent},
  {path: 'favorites', component: AllFavoritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
