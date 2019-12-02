import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent implements OnInit {
  signin = this.fb.group({
    username: [""],
    password: [""]
  });

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {}
  public submit() {
    if (this.signin.valid) {
      let user = this.signin.value as UserDto;
      this.authService.login(user.username, user.password).subscribe(() => {});
    }
  }
}
interface UserDto {
  username: string;
  password: string;
}
