import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteFormComponent } from './invite-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';

describe('InviteFormComponent', () => {
  let component: InviteFormComponent;
  let fixture: ComponentFixture<InviteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InviteFormComponent],
      imports: [ReactiveFormsModule, FormsModule, MaterialModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
