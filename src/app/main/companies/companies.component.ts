import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CompaniesServices } from './shared/companies.service';
import { CompanyModel } from './shared/companymodel';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  mycompany: CompanyModel = {
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
  constructor(private mcs: CompaniesServices, private sanitizer: DomSanitizer) {
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
