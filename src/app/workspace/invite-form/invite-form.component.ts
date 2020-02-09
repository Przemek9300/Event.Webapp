import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkspaceState } from '../store/workspace-state';
import { Store } from '@ngrx/store';
import { addParticipant } from '../store/event/actions';
import { MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-invite-form',
  templateUrl: './invite-form.component.html',
  styleUrls: ['./invite-form.component.scss']
})
export class InviteFormComponent implements OnInit {
  constructor(private fb: FormBuilder, private store: Store<WorkspaceState>) {}
  public basicFormGroup: FormGroup;
  @Inject(MAT_DIALOG_DATA) public data: any;
  ngOnInit() {
    this.basicFormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  public sendInvitation() {
    console.log(this.data);

    if (this.basicFormGroup.valid) {
      this.store.dispatch(addParticipant({ id: 1, email: this.basicFormGroup.value.email }));
      this.basicFormGroup.reset();
      this.basicFormGroup.markAsUntouched();
    }
  }
}
