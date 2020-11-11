import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmployerCustom } from 'src/app/core/models/employer.model';

@Component({
  selector: 'app-employer-table',
  templateUrl: './employer-table.component.html',
  styleUrls: ['./employer-table.component.scss'],
})
export class EmployerTableComponent implements OnInit, OnChanges {
  @Input() employerData: EmployerCustom[] = [];
  displayedColumns: string[] = [
    'id',
    'employeeName',
    'employeeSalary',
    'employeeAge',
  ];
  dataSource: MatTableDataSource<EmployerCustom>;
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.employerData);
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
