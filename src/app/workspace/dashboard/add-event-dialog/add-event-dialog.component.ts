import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { WorkspaceState } from '../../store/workspace-state';
import { selectEvent, selectRoom } from '../../store/selectors';
import { Room } from 'src/models/room';
import { Observable } from 'rxjs';
import { Event } from 'src/models/event';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { overlapValidator } from './validators';

@Component({
  selector: 'app-add-event-dialog',
  templateUrl: './add-event-dialog.component.html',
  styleUrls: ['./add-event-dialog.component.scss']
})
export class AddEventDialogComponent implements OnInit {
  rooms$: Observable<Room[]>;
  events: Event[] = [];

  basicFormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required]
  });

  public dateFormGroup: FormGroup;
  constructor(private store: Store<WorkspaceState>, private fb: FormBuilder) {}

  ngOnInit() {
    this.store.select(selectEvent).subscribe(events => {
      this.events = events;
      this.dateFormGroup = this.fb.group({
        date: this.fb.group(
          {
            start: [Date.now(), Validators.required],
            end: ['', Validators.required]
          },
          { validators: [overlapValidator(this.events)] }
        ),

        room: ['', Validators.required]
      });
    });
    this.rooms$ = this.store.select(selectRoom);
  }
}
