import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEventDialogComponent } from '../add-event-dialog/add-event-dialog.component';

@Component({
  selector: 'app-empty-card',
  templateUrl: './empty-card.component.html',
  styleUrls: ['./empty-card.component.scss']
})
export class EmptyCardComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddEventDialogComponent, {
      width: '90vh',
      height: '90vh'
    });
  }
  ngOnInit() {}
}
