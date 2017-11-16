import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'login',component:LoginComponent}
    ]),
    SharedModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    AuthService
  ]
})
export class UserModule { }
