import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTestComponent } from './app-test/app-test.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule  } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    AppTestComponent,
    routingComponents,
    PageNotFoundComponent,
    DepartmentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
