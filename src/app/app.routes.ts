import { Routes } from '@angular/router';

import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SearchPageComponent } from './components/search-page/search-page.component';

export const ROUTES: Routes = [
    {path: '', component: SearchPageComponent},
    {path: 'user/:id', component: UserProfileComponent},
    {path: '**', redirectTo: ''}
];
