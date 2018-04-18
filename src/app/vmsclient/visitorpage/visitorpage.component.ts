import { Component, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-visitorpage',
  templateUrl: './visitorpage.component.html',
  styleUrls: ['./visitorpage.component.css']
})
export class VisitorpageComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup; // email address
  secondFormGroup: FormGroup; // name
  thirdFormGroup: FormGroup; // company
  fourthFormGroup: FormGroup; // handphone
  fifthFormGroup: FormGroup; // ic

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
  }

}
