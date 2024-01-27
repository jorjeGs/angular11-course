import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // <-- import ActivatedRoute to access the URL parameters

@Component({
  selector: 'app-entrylist',
  templateUrl: './entrylist.component.html',
  styleUrls: ['./entrylist.component.css']
})
export class EntrylistComponent implements OnInit {

  entryList: Array<any> = [
    {id: 1, title: 'First Entry', content: 'This is the first entry'},
    {id: 2, title: 'Second Entry', content: 'This is the second entry'},
    {id: 3, title: 'Third Entry', content: 'This is the third entry'}
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      // the params object has all the query parameters
      let page = params.get('page'); // <-- get the page parameter
      // do something with the page
      let order = params.get('orderBy'); // <-- get the order parameter
      console.log(page);
      console.log(order);
    })
  }

}
