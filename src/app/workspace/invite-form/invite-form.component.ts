import { Component, OnInit } from "@angular/core";
import { FormControl, FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-invite-form",
  templateUrl: "./invite-form.component.html",
  styleUrls: ["./invite-form.component.scss"]
})
export class InviteFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  public inviteForm: FormGroup;
  ngOnInit() {
    this.inviteForm = this.fb.group({
      Email: [""]
    });
  }
}
