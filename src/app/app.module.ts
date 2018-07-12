import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FileSelectDirective } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { ProfileCreateComponent } from './profile-create/profile-create.component';

const appRoutes: Routes = [
  {
    path: 'profiles',
    component: ProfileComponent,
    data: { title: 'Existing Profiles' }
  },
  {
    path: 'profile-details/:id',
    component: ProfileDetailComponent,
    data: { title: 'Profile Details' }
  },
  {
    path: 'profile-create',
    component: ProfileCreateComponent,
    data: { title: 'Create Profile' }
  },
  { path: '',
    redirectTo: '/profiles',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileDetailComponent,
    ProfileCreateComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
