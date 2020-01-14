import { Component, OnInit, Input } from '@angular/core';
import { Member, Status } from 'src/models/member';
import { Room } from 'src/models/room';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  public data: any;
  @Input() members: Member[];
  @Input() room: Room;

  constructor() {}

  ngOnInit() {
    this.data = {
      labels: ['FREE', 'INVITED'],
      datasets: [
        {
          data: [this.room.size - this.members.length, this.members.length],
          backgroundColor: ['#d1d8e0', '#26de81'],
          hoverBackgroundColor: ['#a5b1c2', '#20bf6b']
        }
      ]
    };
  }
}
