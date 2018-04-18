import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  @Output() clickOnStart = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    console.log('init HomePageComponent');
  }

  clickStart() {
    console.log('goto Options');
    this.clickOnStart.emit(true);
  }
}

