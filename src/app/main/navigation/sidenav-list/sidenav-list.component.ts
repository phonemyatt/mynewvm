import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();

  adminRouteNames =  [
  { name: 'My Company' , link: 'mycompany' , icon: 'cube'},
  { name: 'Companies' , link: 'companies', icon: 'clipboard' },
  { name: 'Logs' , link: 'logs' , icon: 'book-open'},
  { name: 'Visitors' , link: 'visitors' , icon: 'account-plus'},
  { name: 'Hosts' , link: 'hosts' , icon: 'account-multiple-plus'},
  { name: 'Clients' , link: 'clients' , icon: 'account-multiple'},
 ];
// visitor and host
 visitorRouteNames =  [
  { name: 'Check Appointment' , link: 'companies' , icon: 'clipboard'},
  { name: 'Schedule Appointment' , link: 'logs' , icon: 'book-open'},
  { name: 'History' , link: 'visitors' , icon: 'account-plus'},
  { name: 'Profile' , link: 'hosts' , icon: 'account-multiple-plus'},
  { name: 'Contacts' , link: 'clients' , icon: 'account-multiple'},
 ];

  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.closeSidenav.emit();
  }

}
