import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRoomComponent } from './list-room.component';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { RouterModule } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

describe('ListRoomComponent', () => {
  let spectator: Spectator<ListRoomComponent>;
  const createComponent = createComponentFactory({
    component: ListRoomComponent,
    imports: [MaterialModule, FormsModule, ReactiveFormsModule, FullCalendarModule, RouterModule.forRoot([])],
    providers: [provideMockStore({})]
  });

  beforeEach(() => (spectator = createComponent()));

  it('should have a success class by default', () => {
    spectator.component.rooms$ = of([]);
    spectator.detectChanges();
    expect(spectator.component).toBeDefined();
  });
});
