import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
