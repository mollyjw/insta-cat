import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatCardComponent } from './cat-card/cat-card.component'
import { SingleCatComponent } from './single-cat/single-cat.component';

const routes: Routes = [
  { path: 'home', component: CatCardComponent},
  { path: 'cats', component: CatCardComponent},
  { path: 'cats/:id', component: SingleCatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
