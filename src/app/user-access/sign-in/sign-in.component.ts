import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { FormBuilder, Validators } from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent implements OnInit {
  signin = this.fb.group({
    username: ["", Validators.required],
    password: ["", Validators.required]
  });
  public error = "";
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {}
  public submit() {
    if (this.signin.valid) {
      let user = this.signin.value as UserDto;
      this.authService.login(user.username, user.password).subscribe(
        () => {},
        (err: HttpErrorResponse) =>
          (this.error =
            err.status === 400
              ? "You have entered an invalid username or password."
              : "")
      );
    }
  }
}
interface UserDto {
  username: string;
  password: string;
}
