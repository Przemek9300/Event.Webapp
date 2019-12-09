import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { WorkspaceState } from '../../store/workspace-state';
import { selectEvents, selectRoom } from '../../store/selectors';
import { Room } from 'src/models/room';
import { Observable } from 'rxjs';
import { Event, EventDto } from 'src/models/event';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { overlapValidator } from './validators';
import { EventService } from '../../services/event-service';
import { addEvent } from '../../store/event/actions';

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
    this.store.select(selectEvents).subscribe(events => {
      this.events = events;
      this.dateFormGroup = this.fb.group({
        date: this.fb.group(
          {
            start: [new Date(Date.now()), Validators.required],
            end: ['', Validators.required]
          },
          { validators: [overlapValidator(this.events)] }
        ),

        room: ['', Validators.required]
      });
    });
    this.rooms$ = this.store.select(selectRoom);
  }
  public submit(): void {
    if (this.dateFormGroup.valid && this.basicFormGroup.valid) {
      const model: EventDto = {
        name: this.basicFormGroup.value.title,
        description: this.basicFormGroup.value.description,
        room: this.dateFormGroup.value.room,
        start: this.dateFormGroup.value.date.start,
        end: this.dateFormGroup.value.date.end,
        clients: [],
        owner: 6
      };
      this.store.dispatch(addEvent({ event: model }));
    }
  }
}
