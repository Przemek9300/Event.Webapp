import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendaryComponent } from './calendary.component';
import { FullCalendarModule } from '@fullcalendar/angular';

describe('CalendaryComponent', () => {
  let component: CalendaryComponent;
  let fixture: ComponentFixture<CalendaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalendaryComponent],
      imports: [FullCalendarModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
