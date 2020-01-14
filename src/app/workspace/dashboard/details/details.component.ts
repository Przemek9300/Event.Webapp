import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { WorkspaceState } from '../../store/workspace-state';
import { selectEventById, selectEventRoom } from '../../store/selectors';
import { Event } from 'src/models/event';
import { ActivatedRoute, Router } from '@angular/router';
import { Member, Status } from 'src/models/member';
import { Room } from 'src/models/room';
import { SelectRoom, SelectEvent } from '../../store/overview/actions';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  public event: Event;
  public room: Room;

  public data: any;
  ngxQrcode2 = 'https://www.npmjs.com/package/ngx-qrcode2';
  constructor(private store: Store<WorkspaceState>, private router: Router) {}

  ngOnInit() {
    this.store.select(selectEventRoom).subscribe(eventRoom => {
      if (eventRoom) {
        this.event = eventRoom.ev;
        this.room = eventRoom.room;
      } else {
        this.router.navigate(['/workspace']);
      }
    });
  }
  public statusClass(member: Member) {
    return {
      'accepted-status': member.status === Status.Accepted,
      'invited-status': member.status === Status.Invited,
      'declined-status': member.status === Status.Declined
    };
  }
  ngOnDestroy(): void {
    this.store.dispatch(SelectRoom({ id:null}))
    this.store.dispatch(SelectEvent({ id:null}))


  }
}
