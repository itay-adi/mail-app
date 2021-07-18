
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MailsListComponent } from './components/mails-list/mails-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CurrStateComponent } from './components/curr-state/curr-state.component';
import { MailPageComponent } from './components/mail-page/mail-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FoldersComponent } from './components/folders/folders.component';
import { FoldersListComponent } from './components/folders-list/folders-list.component';
import { MailsTableComponent } from './components/mails-table/mails-table.component';
import { ErrorsPresenterComponent } from './components/errors-presenter/errors-presenter.component';

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
    ErrorsPresenterComponent,
  ],
  imports: [
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
