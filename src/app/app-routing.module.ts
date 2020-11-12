import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployerComponent } from './features/create-employer/create-employer.component';
import { EditEmployerComponent } from './features/edit-employer/edit-employer.component';
import { TableemployerComponent } from './features/tableemployer/tableemployer.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateEmployerComponent,
  },
  {
    path: 'view',
    component: TableemployerComponent,
  },
  {
    path: 'edit/:id',
    component: EditEmployerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
