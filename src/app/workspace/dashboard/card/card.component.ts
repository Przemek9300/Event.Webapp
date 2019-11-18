import { Component, OnInit, Input } from '@angular/core';
import { Event } from 'src/models/event';
import { MatDialog } from '@angular/material/dialog';
import { InviteFormComponent } from '../../invite-form/invite-form.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() event: Event;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  public inviteClick():void{
    const dialogRef = this.dialog.open(InviteFormComponent, {
      width: '250px',
    });  }
}
