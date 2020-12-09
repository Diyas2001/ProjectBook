import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';


const adminRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'regist',
    component: RegistrationComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
