import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hostpage',
  templateUrl: './hostpage.component.html',
  styleUrls: ['./hostpage.component.css']
})
export class HostpageComponent implements OnInit {
  tiles = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'Five', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'Six', cols: 1, rows: 1, color: '#DDBDF1'},
  ];
  constructor() { }

  ngOnInit() {
    console.log('init HostPageComponent');
  }

}
