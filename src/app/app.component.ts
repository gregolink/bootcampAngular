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
  ngOnInit(): void {}
}
