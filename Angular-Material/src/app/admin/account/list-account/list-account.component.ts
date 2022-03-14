import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AccountService } from 'src/app/service/account/account.service';
import {MatSort, Sort} from '@angular/material/sort';
import { DialogDeleteComponent } from '../../popup/dialog-delete/dialog-delete.component';
import { AddModalAccountComponent } from '../add-modal-account/add-modal-account.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../../snack-bar/snack-bar.component';
import {getNotifytical} from '../../../util/util';

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
  durationInSeconds = 2;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private accountService: AccountService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllAccount();
  }

  // Ham xu ly su kien click ra modal add
  openDialog() {
    const dialogRef = this.dialog.open(AddModalAccountComponent, {
      width: '30%'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result === "save") {
        this.getAllAccount();
        getNotifytical('save', this._snackBar, SnackBarComponent);
      }
    })
  }

  // Ham xu ly su kien submit form
  onSubmit() {
    return false;
  }

  // Ham xu ly cho su kien click ra modal xac nhan delete
  openModalDelete(id: number) {
    const dialogRef = this.dialog.open(DialogDeleteComponent);
    dialogRef.afterClosed().subscribe(res => {
      if(res === 'delete') {
        this.accountService.deleteAccount(id).subscribe(resp => {
          this.getAllAccount();
          getNotifytical('delete', this._snackBar, SnackBarComponent);
        })
      }
    })
  }

  openModalEdit(data: any) {
    const dialogRef = this.dialog.open(AddModalAccountComponent, {
      width: '30%',
      data: data
    });
    dialogRef.afterClosed().subscribe(res => {
      if(res === 'Save') {
        this.getAllAccount();
        getNotifytical('edit', this._snackBar, SnackBarComponent);
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

  /**
   * Ham loc ban ghi
   * @param event
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // /**
  //  * Ham thuc hien chuc nang hien thi thong bao khi them hoac sua hoac xoa thanh cong
  //  * @param message tham so truyen vao la message de nhan biet do la thong bao cua chuc nang them hay sua hay xoa
  //  */
  // getNotifytical(message: string) {
  //   this._snackBar.openFromComponent(SnackBarComponent, {
  //     duration: this.durationInSeconds*1000,
  //     data: message
  //   })
  // }
}
