import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventManagerComponent } from './event-manager.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ChartModule } from 'primeng/chart';
import { ListRoomComponent } from './components/list-room/list-room.component';

describe('EventManagerComponent', () => {
  let component: EventManagerComponent;
  let fixture: ComponentFixture<EventManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventManagerComponent, ListRoomComponent],
      imports: [MaterialModule, ChartModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
