import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventDialogComponent } from './add-event-dialog.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';

describe('AddEventDialogComponent', () => {
  let component: AddEventDialogComponent;
  let fixture: ComponentFixture<AddEventDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddEventDialogComponent],
      imports: [MaterialModule, FormsModule, FullCalendarModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
