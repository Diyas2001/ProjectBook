import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksComponent} from './books/books.component';
import {AuthorsComponent} from './authors/authors.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './home/AdminModule/auth.guard';

const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'authors',
    component: AuthorsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '', component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
