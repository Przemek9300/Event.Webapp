import { Component, OnInit, Input } from '@angular/core';
import { Event } from 'src/models/event';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() event: Event;
  constructor() { }

  ngOnInit() {
  }

}
