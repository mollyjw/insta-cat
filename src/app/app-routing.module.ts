import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllFavoritesComponent } from './all-favorites/all-favorites.component';
import { CatsInBoxesComponent } from './cats-in-boxes/cats-in-boxes.component';
import { CatsInClothesComponent } from './cats-in-clothes/cats-in-clothes.component';
import { CatsInGlassesComponent } from './cats-in-glasses/cats-in-glasses.component';
import { CatsInSinkComponent } from './cats-in-sink/cats-in-sink.component';
import { CatsInSpaceComponent } from './cats-in-space/cats-in-space.component';
import { HomeComponent } from './home/home.component';
import { SingleCatComponent } from './single-cat/single-cat.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  {path: 'allcats', component: HomeComponent},
  { path: 'cats/:id', component: SingleCatComponent},
  {path: 'favorites', component: AllFavoritesComponent},
  {path: 'space', component: CatsInSpaceComponent},
  {path: 'glasses', component: CatsInGlassesComponent},
  {path: 'boxes', component: CatsInBoxesComponent},
  {path: 'sinks', component: CatsInSinkComponent},
  {path: 'clothes', component: CatsInClothesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
