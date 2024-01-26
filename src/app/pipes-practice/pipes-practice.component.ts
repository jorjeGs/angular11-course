import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-practice',
  templateUrl: './pipes-practice.component.html',
  styleUrls: ['./pipes-practice.component.css']
})
export class PipesPracticeComponent implements OnInit {

  title = 'Pipes Practice';
  count: number = 123456;
  decValue: number = 3.141619;
  price: number = 99.999;
  today: Date = new Date();
  objVal = {name: 'Jorje', age: 23, city: 'Ensenada'};
  postArray: Array<string> = ['Angular', 'React', 'Vue', 'Svelte', 'Ember', 'Backbone']

  dummyText: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.';

  constructor() { }

  ngOnInit(): void {
  }

}
