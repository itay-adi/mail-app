import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoldersListComponent } from './components/folders-list/folders-list.component';
import { FoldersComponent } from './components/folders/folders.component';
import { HomeComponent } from './components/home/home.component';
import { MailPageComponent } from './components/mail-page/mail-page.component';
import { MailsListComponent } from './components/mails-list/mails-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'mails', component: MailsListComponent },
  { path: 'mails/:id', component: MailPageComponent},
  { path: 'folders', component: FoldersListComponent},
  { path: 'folders/:id', component: FoldersComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
