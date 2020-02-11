import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from 'src/models/room';
import { WorkspaceState } from 'src/app/workspace/store/workspace-state';
import { Store } from '@ngrx/store';
import { SelectRoom } from 'src/app/workspace/store/overview/actions';

@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.scss']
})
export class ListRoomComponent implements OnInit {
  @Input() rooms$: Observable<Room[]>;
  constructor(private store: Store<WorkspaceState>) {}
  public select(id: number) {
    this.store.dispatch(SelectRoom({ id }));
  }
  ngOnInit() {}
}
