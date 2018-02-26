import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();

  routeNames =  [{ name: 'My Company' , link: 'welcome' , icon: 'clipboard'},
  { name: 'Logs' , link: 'welcome' , icon: 'book-open'},
  { name: 'Visitors' , link: 'welcome' , icon: 'account-plus'},
  { name: 'Hosts' , link: 'welcome' , icon: 'account-multiple-plus'},
  { name: 'Securities' , link: 'welcome' , icon: 'account-multiple'},
 ];

  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.closeSidenav.emit();
  }

}
