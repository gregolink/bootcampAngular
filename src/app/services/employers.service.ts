import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {
  Employer,
  EmployersResponse,
} from '../core/interfaces/employers-response.interface';
import { EmployerCustom } from '../core/models/employer.model';

@Injectable({
  providedIn: 'root',
})
export class EmployersService {
  constructor(private http: HttpClient) {}

  public getEmployers(): Observable<any> {
    return this.http
      .get<EmployersResponse>(
        'http://dummy.restapiexample.com/api/v1/employees'
      )
      .pipe(
        map((res) => this.mapInterfaceToEmployeeObject(res.data)),
        catchError((err) => err)
      );
  }

  public createEmployee(body): Observable<any> {
    return this.http
      .post(
        'http://dummy.restapiexample.com/api/v1/create',
        JSON.stringify(body)
      )
      .pipe(
        map((res) => res),
        catchError((err) => {
          return err;
        })
      );
  }

  mapInterfaceToEmployeeObject(
    employerCollection: Employer[]
  ): EmployerCustom[] {
    const employeeCustomCollection: EmployerCustom[] = [];

    employerCollection.forEach((emp: Employer) => {
      const newEmployerCustom: EmployerCustom = new EmployerCustom();

      newEmployerCustom.employeeAge = emp.employee_age;
      newEmployerCustom.employeeName = emp.employee_name;
      newEmployerCustom.employeeSalary = emp.employee_salary;
      newEmployerCustom.id = emp.id;

      employeeCustomCollection.push(newEmployerCustom);
    });

    return employeeCustomCollection;
  }
}
