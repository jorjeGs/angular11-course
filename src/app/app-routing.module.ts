import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EntryComponent } from './entry/entry.component';
import { EntrylistComponent } from './entrylist/entrylist.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
      { path: '', component: HomeComponent},
      { path: 'entry/:id/:title', component: EntryComponent },
      { path: 'entries', component: EntrylistComponent },
      { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
