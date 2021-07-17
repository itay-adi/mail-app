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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FoldersComponent } from './components/folders/folders.component';
import { FoldersListComponent } from './components/folders-list/folders-list.component';
import { MatListModule} from '@angular/material/list';
import { MailsTableComponent } from './components/mails-table/mails-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MailsListComponent,
    NavBarComponent,
    CurrStateComponent,
    MailPageComponent,
    PageNotFoundComponent,
    FoldersComponent,
    FoldersListComponent,
    MailsTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
