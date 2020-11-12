import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
//Components
import { SearchComponent } from './components/search/search.component';
import { AppComponent } from './app.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { DropDownListComponent } from './components/drop-down-list/drop-down-list.component';
import { EmployerTableComponent } from './components/employer-table/employer-table.component';

//MaterialModules
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { FormOwnerComponent } from './components/form-owner/form-owner.component';
import { TableemployerComponent } from './features/tableemployer/tableemployer.component';
import { CreateEmployerComponent } from './features/create-employer/create-employer.component';
import { EditEmployerComponent } from './features/edit-employer/edit-employer.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { HomeComponent } from './components/home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    DropDownListComponent,
    SearchComponent,
    EmployerTableComponent,
    FormOwnerComponent,
    TableemployerComponent,
    CreateEmployerComponent,
    EditEmployerComponent,
    EditFormComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDividerModule,
    HttpClientModule,
    MatTableModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
