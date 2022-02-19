import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PopupDeleteComponent } from 'src/app/popup/popup-delete/popup-delete.component';
import { AccountService } from 'src/app/service/account/account.service';
import {AddModalComponent} from '../add-modal/add-modal.component';
import {MatSort, Sort} from '@angular/material/sort';

export interface Account {
  username: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})

export class ListAccountComponent implements OnInit {

  displayedColumns: string[] = ['id', 'username', 'password', 'quyen', 'action'];
  dataSource!: MatTableDataSource<any>;
  length!: number;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private accountService: AccountService) { }

  ngOnInit(): void {
    this.getAllAccount();
  }

  // Ham xu ly su kien click ra modal add
  openDialog() {
    const dialogRef = this.dialog.open(AddModalComponent, {
      width: '30%'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result === "save") {
        this.getAllAccount();
      }
    })
  }

  // Ham xu ly su kien submit form
  onSubmit() {
    return false;
  }

  // Ham xu ly cho su kien click ra modal xac nhan delete
  openModalDelete(id: number) {
    const dialogRef = this.dialog.open(PopupDeleteComponent);
    dialogRef.afterClosed().subscribe(res => {
      if(res === 'delete') {
        this.accountService.deleteAccount(id).subscribe(resp => {
          this.getAllAccount();
        })
      }
    })
  }

  openModalEdit(data: any) {
    const dialogRef = this.dialog.open(AddModalComponent, {
      width: '30%',
      data: data
    });
    dialogRef.afterClosed().subscribe(res => {
      if(res === 'Save') {
        this.getAllAccount();
      }
    })
  }

  // Ham xu ly lay danh sach tat ca account
  getAllAccount() {
    this.accountService.getAll().subscribe((res) => {
      this.dataSource = new MatTableDataSource(<any> res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
