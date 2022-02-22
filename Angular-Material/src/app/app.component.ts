import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  breadcrumn: any;

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
}
