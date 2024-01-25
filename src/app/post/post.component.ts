import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  title:string = 'postComponent';
  message:string = 'message from post component';

  childMessage:string = 'message from child component';

  outputChildMessage:string = 'message from child component via output';

  @Input() fromParent:string = '';

  @Output() messageEvent = new EventEmitter<string>();

  changeMessage() {
    this.messageEvent.emit(this.outputChildMessage);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
