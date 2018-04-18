import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vmsclient',
  templateUrl: './vmsclient.component.html',
  styleUrls: ['./vmsclient.component.css']
})
export class VmsclientComponent implements OnInit {

  componentName = 'Main';
  currentPage = 1 ;

  constructor() { }
  ngOnInit() {
  }

  onStart(goStart: boolean) {
    console.log('Main Tracking Start from HomePage');
    goStart ? this.currentPage++ : console.log('something is wrong in onStart'); // just add 1, and define model here;
  }

  onNext(goforward: boolean) {
    (goforward && this.currentPage < 4) ? this.currentPage++ : console.log('something is wrong in onNext');
  }

  onBack(gobackward: boolean) {
    (gobackward && this.currentPage > 0) ? this.currentPage-- : console.log('something is wrong in onBack');
  }
}
