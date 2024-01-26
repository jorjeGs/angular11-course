import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-task',
  templateUrl: './directive-task.component.html',
  styleUrls: ['./directive-task.component.css']
})
export class DirectiveTaskComponent implements OnInit {

  name:string;
  email:string;
  address:string;

  userArray:Array<object> = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.userArray.push({
      name: this.name,
      email: this.email,
      address: this.address
    });
  }

  onDelete(index){
    this.userArray.splice(index, 1);
  }
}
