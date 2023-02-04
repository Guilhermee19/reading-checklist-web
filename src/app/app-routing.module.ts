import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookstoreComponent } from './pages/bookstore/bookstore.component';

const routes: Routes = [
  { path: '', redirectTo: 'bookstore', pathMatch: 'full' },
  { path: '', component: NavbarComponent,
    children: [
      { path: 'bookstore', component: BookstoreComponent }
    ]  
  },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
