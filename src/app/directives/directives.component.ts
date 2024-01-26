import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //directives
  postArray:Array<string> = ["post1", "post2", "post3"];
  objArray:Array<object> = [];
  
  //ngFor|ngIf
 addNew(){
  this.objArray.push({
    id: this.objArray.length + 1,
    postTitle: "post" + (this.objArray.length + 1)
  });
}

//ngFor
onDelete(index:number){
  //splice method removes elements from an array and returns the removed elements
  //it's not necessary to use the return value of splice
  this.objArray.splice(index, 1);
}

//ngSwitch
stepForm:string;
onClick(step:string){
  this.stepForm = step;
}

styling:boolean = true;
onStyle(){
  this.styling = !this.styling;
}

}
