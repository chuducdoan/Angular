import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  breadcrumn: any;
  login: boolean = true;
  toggle = true;

  arrSideBar: any = [
    {
      url: 'account',
      text: 'Account'
    },
    {
      url: 'spending-record',
      text: 'Bản ghi chi tiêu'
    },
    {
      url: 'post',
      text: 'Bài viết'
    },
    {
      url: 'wallet',
      text: 'Ví'
    },
  ];

  onButtonClickFromSideBar(event: any): void {
    this.breadcrumn = event;
    console.log("parent: " + this.breadcrumn.text)
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideBar(event: Event) {
    this.toggle = !this.toggle;
  }

}
