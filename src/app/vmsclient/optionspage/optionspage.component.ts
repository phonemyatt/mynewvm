import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-optionspage',
  templateUrl: './optionspage.component.html',
  styleUrls: ['./optionspage.component.css']
})
export class OptionspageComponent implements OnInit {
  @Output() clickOnNext = new EventEmitter<boolean>();
  @Output() clickOnClose = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    console.log('init OptionsPageComponent');
  }

  onNext() {
    console.log('next from Options');
    this.clickOnNext.emit(true);
  }

  onClose() {
    console.log('close from Options');
    this.clickOnClose.emit(true);
  }

}
