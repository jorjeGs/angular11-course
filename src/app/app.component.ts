import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  //FIRST PART
  //DATA, CLASS AND EVENT BINDING, CHILD-PARENT PARENT-CHILD COMMUNICATION, COMPONENTS BASICS
  // parentMessage:string = "message changed";

  // @ViewChild(PostComponent) childComp;

  // message:string;

  // //two way binding
  // userName:string = "";

  // //class binding (h1) and style binding (p)
  // boolClass:boolean = true;

  // receiveMessage($event) {
  //   this.message = $event;
  // }

  // onClick() {
  //   this.boolClass = !this.boolClass;
  // }

  // onKeyUp($event) {
  //   console.log($event.target.value);
  // }

  // onKeyUpVariable(value:string){
  //   console.log(value);
  // }

  // onKeyUpTwoWayBinding() {
  //   console.log(this.userName);
  // }

  //EXERCISE 1
  // title = "Title";
  // details = "Details";
  // imageurl = "Image URL";
  // link = "Link";
  // boolBgColor = false;
  // showForm = false;

  // receiveForm($event) {
  //   //we are receiving an object with the data
  //   //we need to update the variables
  //   if($event.title == "" && $event.details == "" && $event.imageurl == "" && $event.link == ""){
  //     this.showForm = false;
  //     return;
  //   }
  //   this.showForm = true;
  //   this.title = $event.title;
  //   this.details = $event.details;
  //   this.imageurl = $event.imageurl;
  //   this.link = $event.link;
  //   this.boolBgColor = $event.boolBgColor;
  // }
  
  constructor() {
    
  }

 ngAfterViewInit() {
   
 }

}