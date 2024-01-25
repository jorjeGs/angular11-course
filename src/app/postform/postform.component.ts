import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})
export class PostformComponent implements OnInit {

  title:string = "";
  details:string = "";
  imageurl:string = "";
  link:string = "";
  boolBgColor:boolean = false;

  //now, lets implement pass this data to the parent component
  //we need to create an event emitter
  //then, we need to create a function that will emit this event
  //and finally, we need to call this function in the template
  //in this case, we will update the info on every keyup
  //so, in the input, we will add (keyup)="test()"
  //and in the function, we will emit the event
  //and in the parent component, we will receive the event
  //and update the variables

  @Output() formEvent = new EventEmitter<Object>();

  sendForm() {
    this.formEvent.emit({
      title: this.title,
      details: this.details,
      imageurl: this.imageurl,
      link: this.link,
      boolBgColor: this.boolBgColor
    });
  }

  //in the parent template, we will add (formEvent)="receiveForm($event)"

  constructor() { }

  ngOnInit(): void {
  }

  //testing one way binding
  //that woould be for the title of the page, or something who doesn't need to be changed
  //for changing things, we need two way binding, in this case for the form
  //to implement, just add in the input the [(ngModel)]="title" to bind the variable title to the input
  test() {
    console.log(this.title);
    console.log(this.details);
    console.log(this.imageurl);
    console.log(this.link);
    console.log(this.boolBgColor);
  }

}
