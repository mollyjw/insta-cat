import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatCardComponent } from './cat-card/cat-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';


import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SingleCatComponent } from './single-cat/single-cat.component';
import { CommentsComponent } from './comments/comments.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { AllFavoritesComponent } from './all-favorites/all-favorites.component';
import { FavoriteCardComponent } from './favorite-card/favorite-card.component';
import { CatsInSpaceComponent } from "./cats-in-space/cats-in-space.component";
import { CatsInGlassesComponent } from './cats-in-glasses/cats-in-glasses.component';
import { CatsInBoxesComponent } from './cats-in-boxes/cats-in-boxes.component';
import { CatsInSinkComponent } from './cats-in-sink/cats-in-sink.component';
import { CatsInClothesComponent } from './cats-in-clothes/cats-in-clothes.component';

@NgModule({
  declarations: [
    AppComponent,
    CatCardComponent,
    HomeComponent,
    NavbarComponent,
    SingleCatComponent,
    CommentsComponent,
    AddCommentComponent,
    AllFavoritesComponent,
    FavoriteCardComponent,
    CatsInSpaceComponent,
    CatsInGlassesComponent,
    CatsInBoxesComponent,
    CatsInSinkComponent,
    CatsInClothesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
    MatTooltipModule,
    MatSnackBarModule,
    FlexLayoutModule,
    FormsModule,
    MatSelectModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
