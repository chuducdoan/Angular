import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {AddModalComponent} from '../add-modal/add-modal.component';

export interface PeriodicElement {
  username: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, username: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, username: 'Helium', weight: 4.0026, symbol: 'He'},
];

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})

export class ListAccountComponent implements OnInit {

  displayedColumns: string[] = ['position', 'username', 'weight', 'symbol', 'action'];
  dataSource = ELEMENT_DATA

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ' + result);
    })
  }

  onSubmit() {
    return false;
  }
}
