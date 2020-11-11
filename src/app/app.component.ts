import { Component, OnInit } from '@angular/core';
import { EmployerCustom } from './core/models/employer.model';
import { EmployersService } from './services/employers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'myProject';
  myColorArray: string[];
  myCityArray: string[];
  selectedItem: string = '';
  selectedCityItem: string = '';
  execQuery: string;
  employerData: EmployerCustom[];
  constructor(private employers: EmployersService) {}

  ngOnInit(): void {
    this.initCityValues();
    this.initColorValues();
    this.getEmployers();
  }

  initCityValues(): void {
    this.myCityArray = ['Cádiz', 'Sevilla', 'Huelva'];
  }
  initColorValues(): void {
    this.myColorArray = ['Red', 'Green', 'White'];
  }
  getSelectedColor(item: string): void {
    this.selectedItem = item;
  }
  getSelectedCity(item: string): void {
    this.selectedCityItem = item;
  }
  getQuery(query: string): void {
    this.execQuery = query;
  }

  getEmployers(): void {
    this.employers.getEmployers().subscribe((res) => {
      setTimeout(() => {
        this.employerData = res;
      }, 3000);
    });
  }
}
