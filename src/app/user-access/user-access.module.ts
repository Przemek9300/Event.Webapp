import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserAccessRoutingModule } from './user-access-routing.module';
import { AccessLayoutComponent } from './access-layout/access-layout.component';
import { MaterialModule } from '../material/material.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [SignInComponent, AccessLayoutComponent, SignUpComponent, ForgetPasswordComponent],
  imports: [
    CommonModule,
    UserAccessRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class UserAccessModule { }
