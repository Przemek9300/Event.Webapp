import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyCardComponent } from './empty-card.component';
import { MaterialModule } from 'src/app/material/material.module';

describe('EmptyCardComponent', () => {
  let component: EmptyCardComponent;
  let fixture: ComponentFixture<EmptyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmptyCardComponent],
      imports: [MaterialModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
