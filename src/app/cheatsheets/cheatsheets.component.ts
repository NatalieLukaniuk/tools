import { CheatsheetsDataService } from './services/cheatsheets-data.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

interface CheatsheetsData {
  name: string;
  value: string;
}
@Component({
  selector: 'app-cheatsheets',
  templateUrl: './cheatsheets.component.html',
  styleUrls: ['./cheatsheets.component.scss']
})
export class CheatsheetsComponent implements OnInit, AfterViewInit {

data: any;
displayedColumns = ['name', 'value'];
dataSource = new MatTableDataSource<CheatsheetsData>();
@ViewChild(MatSort) sort: MatSort;

  constructor(private cheatsheetsDataService: CheatsheetsDataService) { }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
this.dataSource.data = this.cheatsheetsDataService.data.fontWeights;
  }

}
