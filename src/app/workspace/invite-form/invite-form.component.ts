import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkspaceState } from '../store/workspace-state';
import { Store } from '@ngrx/store';
import { addParticipant } from '../store/event/actions';

@Component({
  selector: 'app-invite-form',
  templateUrl: './invite-form.component.html',
  styleUrls: ['./invite-form.component.scss']
})
export class InviteFormComponent implements OnInit {
  constructor(private fb: FormBuilder, private store: Store<WorkspaceState>) {}
  public basicFormGroup: FormGroup;
  ngOnInit() {
    this.basicFormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  public sendInvitation() {
    if (this.basicFormGroup.valid) {
      this.store.dispatch(addParticipant({ id: 1, email: this.basicFormGroup.value['email'] }));
      this.basicFormGroup.reset();
    }
  }
}
