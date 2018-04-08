import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MyCompanyServices } from './shared/mycompany.service';
import { MyCompanyModel } from './shared/mycompanymodel';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-mycompany',
  templateUrl: './mycompany.component.html',
  styleUrls: ['./mycompany.component.css']
})

export class MyCompanyComponent implements OnInit {
  mycompany: MyCompanyModel = {
    id: '',
    imgpath: '',
    permission: '',
    name: '',
    desc: '',
    remark:  '',
    address: '',
    tel: '',
    fax: '',
    cemail: '',
    homelink: '',
    fblink: '',
    googlelink: '',
  };
  constructor(private mcs: MyCompanyServices, private sanitizer: DomSanitizer) {
    console.log('Result');
    this.mcs.getOne().subscribe(result => {
      this.mycompany = result;
    });
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnInit() {
  }
}
