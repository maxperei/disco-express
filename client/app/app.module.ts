import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { App } from './app.component';
import { DiscogsApi } from '../services/discogs-api';
import { Collection } from '../pages/collection/collection.component';
import { Identity } from '../pages/identity/identity.component';
import { PageNotFound } from '../pages/page-not-found/page-not-found.component';
import { Profile } from '../pages/profile/profile.component'
import { routing } from './app.routes';
import { RootPage } from '../pages/root-page/root-page.component';
import { ReleaseDetail } from "../pages/release/release-detail.component";
import { SafePipe } from '../pipes/safe.pipe';
import { LoginComponent } from '../pages/login/login.component';

@NgModule({
  declarations: [
    App,
    Collection,
    Identity,
    PageNotFound,
    Profile,
    RootPage,
    ReleaseDetail,
    SafePipe,
    LoginComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DiscogsApi
  ],
  bootstrap: [App]
})
export class AppModule { }