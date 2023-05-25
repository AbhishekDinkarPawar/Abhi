import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './component/user/user.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { CreateUserComponent } from './component/create-user/create-user.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { CalculatorComponent } from './component/calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateStudentComponent } from './create-student/create-student.component';
import { NgIfComponent } from './component/ng-if/ng-if.component';
import { NgForComponent } from './component/ng-for/ng-for.component';
import { NgClassComponent } from './component/ng-class/ng-class.component';
import { NgStyleComponent } from './component/ng-style/ng-style.component';
import { PipesComponent } from './component/pipes/pipes.component';
import { UserRegisterComponent } from './component/user-register/user-register.component';
import { NaPipe } from './myPipe/na.pipe';
import { CreateProductComponent } from './component/Product/create-product/create-product.component';
import { ProductListComponent } from './component/Product/product-list/product-list.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { TemplateComponent } from './component/template/template.component';
import { GetApiComponent } from './component/get-api/get-api.component';
import {HttpClientModule} from '@angular/common/http';
import { ApiGet1Component } from './component/api-get1/api-get1.component';
import { CourseApiComponent } from './component/course-api/course-api.component';
import { CandidateComponent } from './component/candidate/candidate.component';
import { ClientComponent } from './component/client/client.component';
import { JsonComponent } from './component/json/json.component';
import { AlertComponent } from './component/Reuse/alert/alert.component';
import { ProgressBarComponent } from './component/Reuse/progress-bar/progress-bar.component';
import { MyButtonComponent } from './component/Reuse/my-button/my-button.component';
import { LoginComponent } from './component/login/login.component';
import { LayoutComponent } from './component/layout/layout.component';
import { AuthGuard } from './service/Guard/auth.guard';
import {ReactiveFormComponent } from './component/reactive-form/reactive-form.component';
import { LifecycleHookComponent } from './component/lifecycle-hook/lifecycle-hook.component';
import { FilterComponent } from './component/filter/filter.component';
import { ReuseTableComponent } from './component/reuse-table/reuse-table.component';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { ReactiveComponent } from './component/reactive/reactive.component';
import { TestComponent } from './component/test/test.component';
import { NewComponent } from './component/new/new.component'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EmployeeComponent,
    CreateUserComponent,
    DataBindingComponent,
    CalculatorComponent,
    CreateStudentComponent,
    NgIfComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    PipesComponent,
    UserRegisterComponent,
    NaPipe,
    CreateProductComponent,
    ProductListComponent,
    EmployeeListComponent,
    TemplateComponent,
    GetApiComponent,
    ApiGet1Component,
    CourseApiComponent,
    CandidateComponent,
    ClientComponent,
    JsonComponent,
    AlertComponent,
    ProgressBarComponent,
    MyButtonComponent,
    LoginComponent,
    LayoutComponent,
    ReactiveFormComponent,
    LifecycleHookComponent,
    FilterComponent,
    ReuseTableComponent,
    ReactiveComponent,
    TestComponent,
    NewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    TableModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
