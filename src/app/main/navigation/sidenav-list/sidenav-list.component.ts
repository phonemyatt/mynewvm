import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();

  routeNames =  [
  { name: 'My Company' , link: 'companies' , icon: 'clipboard'},
  { name: 'Logs' , link: 'logs' , icon: 'book-open'},
  { name: 'Visitors' , link: 'visitors' , icon: 'account-plus'},
  { name: 'Hosts' , link: 'hosts' , icon: 'account-multiple-plus'},
  { name: 'Clients' , link: 'clients' , icon: 'account-multiple'},
 ];

  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.closeSidenav.emit();
  }

}
