import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectServiceService } from './project-service.service'
import{ OrganizationService } from './organization.service'
// import { DepartmentListComponent } from './department-list/department-list.component';
// import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    // DepartmentListComponent,
    // EmployeeListComponent
    routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ProjectServiceService,
    OrganizationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
