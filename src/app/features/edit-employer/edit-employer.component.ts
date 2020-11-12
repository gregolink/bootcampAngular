import { Component, OnInit } from '@angular/core';
import { EmployersService } from 'src/app/services/employers.service';
@Component({
  selector: 'app-edit-employer',
  templateUrl: './edit-employer.component.html',
  styleUrls: ['./edit-employer.component.scss']
})
export class EditEmployerComponent implements OnInit {

  constructor(private employers: EmployersService) { }

  ngOnInit(): void {
  }
  getFormValue(values) {
    this.updateEmployer(values);
  }

  updateEmployer(values) {
    this.employers.updateEmployee(values).subscribe((res) => {
      console.log('respuesta al crear empleado', res);
    });
  }

}
