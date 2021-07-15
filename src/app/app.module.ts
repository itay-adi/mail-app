import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MailsListComponent } from './components/mails-list/mails-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CurrStateComponent } from './components/curr-state/curr-state.component';
import { MailPageComponent } from './components/mail-page/mail-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MailsListComponent,
    NavBarComponent,
    CurrStateComponent,
    MailPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
