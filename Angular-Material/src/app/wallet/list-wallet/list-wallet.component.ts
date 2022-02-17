import { Component, OnInit } from '@angular/core';

export interface Wallet {
  id: number;
  ghichu: string;
  sotien: number;
  ngaynaprut: string;
  loai: string
}

const ELEMENT_DATA: Wallet[] = [
  {id: 1, ghichu: 'con da rut tien', sotien: 1.0079, ngaynaprut: '12/2/2022', loai: 'cha'},
];

@Component({
  selector: 'app-list-wallet',
  templateUrl: './list-wallet.component.html',
  styleUrls: ['./list-wallet.component.css']
})
export class ListWalletComponent implements OnInit {

  displayedColumns: string[] = ['id', 'ghichu', 'sotien', 'ngaynaprut', 'loai'];
  dataSource = ELEMENT_DATA

  constructor() { }

  ngOnInit(): void {
  }

}
