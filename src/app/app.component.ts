import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { PostComponent } from './post/post.component';
import { Observable } from 'rxjs'; // <-- import Observable in order to use it 
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

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
  
  constructor(private router : Router) {
    
  }

  ngOnInit(): void {
    //create an observable
    const observable = new Observable(observer => {
      //observable execution with next
      //this will be executed when we subscribe to the observable
      observer.next('Hello from a Observable!');
      observer.next('How are you?');
      observer.next('I am fine');
    //with subscribe we can subscribe to the observable
    //we can pass 3 functions as parameters
    //1. next function
    //2. error function
    //3. complete function
  }).subscribe(value => console.log(value));
}

onSubmit() {
  //simple navigation
  //this.router.navigate(['/'])
  //navigation with query parameters
  //this.router.navigate(['/entrylist'], { queryParams: { page: 1, orderBy: 'newest' } });
  //navigation with route parameters
  //this.router.navigate(['/entry', 1, 'title'])
}
}