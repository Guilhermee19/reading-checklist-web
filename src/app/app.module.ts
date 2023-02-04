import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookstoreComponent } from './pages/bookstore/bookstore.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IconComponent } from './components/Icons/icons-svg.component';

@NgModule({
  declarations: [
    AppComponent,
    BookstoreComponent,
    NavbarComponent,
    IconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
