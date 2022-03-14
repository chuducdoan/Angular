import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
    const myChart = new Chart("myChart", {
      type: 'line',
      data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
              label: 'Spending Record',
              data: [10, 30, 15, 25, 50, 35, 70, 45,60,100, 110, 70],
              backgroundColor:
                  'rgba(255, 99, 132, 0.2)'
              ,
              borderColor:
                  'rgba(255, 99, 132, 1)'
              ,
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                stacked: true
              }
          }
      }
    });

    const chartDoughnut = new Chart("chartDoughnut", {
      type: 'doughnut',
      data: {
          labels: ['Mẹ', 'Bố', 'Con'],
          datasets: [{
              label: '# of Votes',
              data: [1, 2, 3],
              backgroundColor: [
                'rgba(239, 110, 110, 0.7)',
                'rgba(255, 170, 42, 0.7)',
                'rgba(34, 198, 171, 0.7)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)',
              ],
              borderWidth: 1
          }]
      },
      options: {
        // tat tu dong height
        maintainAspectRatio: false,
        responsive: true
      }
    });
  }

}
