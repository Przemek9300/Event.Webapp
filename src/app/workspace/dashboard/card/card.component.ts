import { Component, OnInit, Input } from '@angular/core';
import { Event } from 'src/models/event';
import { MatDialog } from '@angular/material/dialog';
import { InviteFormComponent } from '../../invite-form/invite-form.component';
import { Store } from '@ngrx/store';
import { WorkspaceState } from '../../store/workspace-state';
import { SelectEvent, SelectRoom } from '../../store/overview/actions';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() event: Event;
  constructor(public dialog: MatDialog, private store: Store<WorkspaceState>) {}

  ngOnInit() {}
  public inviteClick(): void {
    const dialogRef = this.dialog.open(InviteFormComponent, {
      width: '250px'
    });
  }

  public select(event: Event) {
    this.store.dispatch(SelectRoom({ id: event.roomId }));
    this.store.dispatch(SelectEvent({ id: this.event.id }));
  }
}
