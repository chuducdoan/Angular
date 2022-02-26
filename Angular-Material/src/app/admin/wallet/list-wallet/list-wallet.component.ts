import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { WalletService } from 'src/app/service/wallet/wallet.service';

@Component({
  selector: 'app-list-wallet',
  templateUrl: './list-wallet.component.html',
  styleUrls: ['./list-wallet.component.css']
})
export class ListWalletComponent implements OnInit {

  displayedColumns: string[] = ['id', 'ghichu', 'sotien', 'ngaynaprut', 'loai'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private walletService: WalletService) { }

  ngOnInit(): void {
    this.getAllWallet();
  }

  getAllWallet() {
    this.walletService.getAll().subscribe(res => {
      this.dataSource = new MatTableDataSource(<any> res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    console.log(event);
    const valueFilter = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valueFilter.trim().toLowerCase();
  }

}
