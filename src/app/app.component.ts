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

  //two way binding
  userName:string = "";

  //class binding (h1) and style binding (p)
  boolClass:boolean = true;

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

  onClick() {
    this.boolClass = !this.boolClass;
  }

  onKeyUp($event) {
    console.log($event.target.value);
  }

  onKeyUpVariable(value:string){
    console.log(value);
  }

  onKeyUpTwoWayBinding() {
    console.log(this.userName);
  }
}