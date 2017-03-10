import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersSearchFormComponent } from './components/users-search-form/users-search-form.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

import { UsersService } from './services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    UsersListComponent,
    UsersSearchFormComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
