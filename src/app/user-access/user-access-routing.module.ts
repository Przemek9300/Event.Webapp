import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { SignInComponent } from "./sign-in/sign-in.component";
import { AccessLayoutComponent } from "./access-layout/access-layout.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

const routes: Routes = [
  { path: "", redirectTo: "signin", pathMatch: "full" },

  {
    path: "",
    component: AccessLayoutComponent,
    children: [
      { path: "signin", component: SignInComponent },
      { path: "signup", component: SignUpComponent },
      { path: "password", component: ForgetPasswordComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAccessRoutingModule {}
