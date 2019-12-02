import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SignInComponent } from "./sign-in/sign-in.component";
import { UserAccessRoutingModule } from "./user-access-routing.module";
import { AccessLayoutComponent } from "./access-layout/access-layout.component";
import { MaterialModule } from "../material/material.module";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    SignInComponent,
    AccessLayoutComponent,
    SignUpComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    UserAccessRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserAccessModule {}
