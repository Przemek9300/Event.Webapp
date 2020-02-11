import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { CardComponent } from './card.component';

import { MaterialModule } from 'src/app/material/material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FullCalendarModule } from '@fullcalendar/angular';

import { RouterModule } from '@angular/router';

import { provideMockStore } from '@ngrx/store/testing';
import { mockedEvent } from 'src/models/event';

describe('CardComponent', () => {
  let spectator: Spectator<CardComponent>;
  const createComponent = createComponentFactory({
    component: CardComponent,
    imports: [MaterialModule, FormsModule, ReactiveFormsModule, FullCalendarModule, RouterModule.forRoot([])],
    providers: [provideMockStore({})]
  });

  beforeEach(
    () =>
      (spectator = createComponent({
        props: {
          event: mockedEvent
        }
      }))
  );

  it('should have a success class by default', () => {
    spectator.detectChanges();
    expect(spectator.component).toBeDefined();
  });
});
