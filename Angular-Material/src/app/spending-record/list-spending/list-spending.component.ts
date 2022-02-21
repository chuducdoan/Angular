import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PopupDeleteComponent } from 'src/app/popup/popup-delete/popup-delete.component';
import { SpendingService } from 'src/app/service/spending/spending.service';
import { AddModalComponent } from '../add-modal/add-modal.component';

@Component({
  selector: 'app-list-spending',
  templateUrl: './list-spending.component.html',
  styleUrls: ['./list-spending.component.css']
})
export class ListSpendingComponent implements OnInit {

  displayedColumns: string[] = ['id', 'ngaytao', 'loaichitieu', 'sotien', 'ghichu', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private spendingService: SpendingService) { }

  ngOnInit(): void {
    this.getAllSpending();
  }

  // Ham xu ly mo modal add
  openModal() {
    const dialogRef = this.dialog.open(AddModalComponent, {
      width: '30%'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ' + result);
      if(result === 'save') {
        this.getAllSpending();
      }
    })
  }

  onSubmit() {
    return false;
  }

  openModalDelete(id: number) {
    const dialogRef = this.dialog.open(PopupDeleteComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (res === 'delete') {
        this.spendingService.deleteSpending(id).subscribe({
          next: () => {
            this.getAllSpending();
          },
          error: () => {
            alert("Xoa that bai!");
          }
        })
      }
    })
  }

  // Ham xu ly cho su kien mo modal edit
  openModalEdit(data: any) {
    const dialogRef = this.dialog.open(AddModalComponent, {
      width: '30%',
      data: data
    });
    dialogRef.afterClosed().subscribe(res => {
      if(res === 'update') {
        this.getAllSpending();
      }
    })
  }

  // Ham xu ly lay tat ca ban ghi spending
  getAllSpending() {
    this.spendingService.getAll().subscribe(res => {
      this.dataSource = new MatTableDataSource(<any> res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  // Ham xu ly su kien search
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
