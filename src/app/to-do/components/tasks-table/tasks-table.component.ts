import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Task } from '../../models/task';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.scss']
})
export class TasksTableComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() tasks: Task[];
  displayedColumns = ['isChecked', 'name', 'dueDate', 'isImportant'];
  dataSource = new MatTableDataSource<Task>();
@ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator) paginator: MatPaginator;

initialSelection = [];
allowMultiSelect = true;
selection = new SelectionModel<Task>(this.allowMultiSelect, this.initialSelection);

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource.data = this.tasks;
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  filter(ev: Event): void{
    this.dataSource.filter = (ev.target as HTMLInputElement).value.trim().toLowerCase();
  }

  masterToggle(): void{
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  isAllSelected(): boolean{
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  check(): void{
    console.log(this.selection.selected);
  }

  toggleImportance(task: Task): void{
    task.isImportant = !task.isImportant;
  }
}
