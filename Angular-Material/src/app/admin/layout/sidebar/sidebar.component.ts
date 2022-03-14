import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() arrSideBar: any;
  @Input() toggle: any;
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {

  }

  onButtonClick(itemURL: any) {
    this.buttonClicked.emit(itemURL);
  }

}
