import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatCardComponent } from './cat-card/cat-card.component'

const routes: Routes = [
  { path: 'home', component: CatCardComponent},
  { path: 'cats', component: CatCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
