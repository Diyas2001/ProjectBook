import {NgModule} from '@angular/core';
import {AdminRoutingModule} from './AdminRoute';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';
import {AuthenticationService} from './auth.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [AdminRoutingModule,
    CommonModule, FormsModule],
  providers: [

  ],
 })
export class AdminModule {private router: Router; private authenticationService: AuthenticationService
}
