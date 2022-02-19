import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupDeleteComponent } from 'src/app/popup/popup-delete/popup-delete.component';
import { AddModalComponent } from '../add-modal/add-modal.component';

export interface SpendingRecord {
  id: number;
  ngaytao: string;
  loaichitieu: string;
  sotien: number;
  ghichu: string
}

const ELEMENT_DATA: SpendingRecord[] = [
  {id: 1, ngaytao: '20/11/2022', loaichitieu: 'do xang', sotien: 42000, ghichu: 'tieu nhieu tien qua'},
];


@Component({
  selector: 'app-list-spending',
  templateUrl: './list-spending.component.html',
  styleUrls: ['./list-spending.component.css']
})
export class ListSpendingComponent implements OnInit {

  displayedColumns: string[] = ['id', 'ngaytao', 'loaichitieu', 'sotien', 'ghichu', 'action'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModal() {
    const dialogRef = this.dialog.open(AddModalComponent, {
      width: '30%'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ' + result);
    })
  }

  onSubmit() {
    return false;
  }

  openModalDelete() {
    const dialogRef = this.dialog.open(PopupDeleteComponent);
  }

}
