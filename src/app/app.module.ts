import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent} from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostformComponent } from './postform/postform.component';
import { DirectivesComponent } from './directives/directives.component';
import { DirectiveTaskComponent } from './directive-task/directive-task.component';
import { PipesPracticeComponent } from './pipes-practice/pipes-practice.component';
import { AppendCLIPipe } from './Pipes/append-cli.pipe'; // <-- import the pipe
import { SummaryPipe } from './Pipes/summary.pipe';
import { UserService } from './Services/user.service'; // <-- import the service
import { ServicesComponent } from './serviceTutorial/services.component';
import { EntryComponent } from './entry/entry.component';
import { EntrylistComponent } from './entrylist/entrylist.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component'; // <-- import the module for routing

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    PostlistComponent,
    PostformComponent,
    DirectivesComponent,
    DirectiveTaskComponent,
    PipesPracticeComponent,
    AppendCLIPipe, // <-- include it in our NgModule
    SummaryPipe, // <-- include it in our NgModule
    ServicesComponent, EntryComponent, EntrylistComponent, HomeComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
  ],
  providers: [UserService], // <-- register the service as a provider
  bootstrap: [AppComponent]
})
export class AppModule { }
