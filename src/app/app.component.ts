import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'angularIntro';
  parentMessage:string = "message changed";

  @ViewChild(PostComponent) childComp;

  message:string;

  constructor() {
    console.log(this.childComp);
   }

  ngAfterViewInit() {
    console.log(this.childComp);
    this.message = this.childComp.childMessage;
  }

  receiveMessage($event) {
    this.message = $event;
  }
}