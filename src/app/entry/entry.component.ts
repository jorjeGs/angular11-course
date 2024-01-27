import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // <-- import ActivatedRoute to access the URL parameters

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  // inject ActivatedRoute into the constructor
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // the params object has all the URL parameters
      let id = params.get('id'); // <-- get the id parameter
      // do something with the id
      let title = params.get('title'); // <-- get the title parameter
    });
  }
}
