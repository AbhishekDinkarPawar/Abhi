import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiGet1Component } from './component/api-get1/api-get1.component';
import { CalculatorComponent } from './component/calculator/calculator.component';
import { CandidateComponent } from './component/candidate/candidate.component';
import { ClientComponent } from './component/client/client.component';
import { CourseApiComponent } from './component/course-api/course-api.component';
import { CreateUserComponent } from './component/create-user/create-user.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { FilterComponent } from './component/filter/filter.component';
import { GetApiComponent } from './component/get-api/get-api.component';
import { JsonComponent } from './component/json/json.component';
import { LayoutComponent } from './component/layout/layout.component';
import { LifecycleHookComponent } from './component/lifecycle-hook/lifecycle-hook.component';
import { LoginComponent } from './component/login/login.component';
import { NgClassComponent } from './component/ng-class/ng-class.component';
import { NgForComponent } from './component/ng-for/ng-for.component';
import { NgIfComponent } from './component/ng-if/ng-if.component';
import { NgStyleComponent } from './component/ng-style/ng-style.component';
import { PipesComponent } from './component/pipes/pipes.component';
import { CreateProductComponent } from './component/Product/create-product/create-product.component';
import { ProductListComponent } from './component/Product/product-list/product-list.component';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';
import { ReactiveComponent } from './component/reactive/reactive.component';
import { ReuseTableComponent } from './component/reuse-table/reuse-table.component';
import { TemplateComponent } from './component/template/template.component';
import { TestComponent } from './component/test/test.component';
import { UserRegisterComponent } from './component/user-register/user-register.component';
import { UserComponent } from './component/user/user.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { AuthGuard } from './service/Guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'emp',
        component: EmployeeComponent,
        canActivate : [AuthGuard]
      },
      {
        path: 'user',
        component: UserComponent,
        canActivate : [AuthGuard]
      },
      {
        path: 'createUser',
        component: CreateUserComponent,

      },
      {
        path: 'dataBinding',
        component: DataBindingComponent,
      },
      {
        path: 'Calculator',
        component: CalculatorComponent,
      },
      {
        path: 'CreateStudent',
        component: CreateStudentComponent,
      },
      {
        path: 'ngIf',
        component: NgIfComponent,
      },
      {
        path: 'ngFor',
        component: NgForComponent,
      },
      {
        path: 'ngclass',
        component: NgClassComponent,
      },
      {
        path: 'ngStyle',
        component: NgStyleComponent,
      },
      {
        path: 'pipes',
        component: PipesComponent,
      },
      {
        path: 'userForm',
        component: UserRegisterComponent,
      },
      {
        path: 'createProduct',
        component: CreateProductComponent,
      },
      {
        path: 'productList',
        component: ProductListComponent,
      },
      {
        path: 'employeeList',
        component: EmployeeListComponent,
      },
      {
        path: 'template',
        component: TemplateComponent,
      },
      {
        path: 'api-get',
        component: GetApiComponent,
      },
      {
        path: 'api-get-1',
        component: ApiGet1Component,
      },
      {
        path: 'course',
        component: CourseApiComponent,
      },
      {
        path: 'candidate',
        component: CandidateComponent,
      },
      {
        path: 'client',
        component: ClientComponent,
      },
      {
        path: 'json',
        component: JsonComponent,
      },
      {
        path: 'reactiveForm',
        component: ReactiveFormComponent,
      },
      {
        path: 'lifecycleHook',
        component: LifecycleHookComponent,
      },
      {
        path: 'filter',
        component: FilterComponent,
      },
      {
        path: 'reuseTable',
        component: ReuseTableComponent,
      },
      {
        path: 'reactive',
        component: ReactiveComponent,
      },
      {
        path: 'Test',
        component: TestComponent,
      },
     ]
  },
  {
    path : 'emp',
    component : EmployeeComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
