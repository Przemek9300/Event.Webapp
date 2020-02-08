import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSkeletonComponent } from './card-skeleton.component';
import { MaterialModule } from 'src/app/material/material.module';

describe('CardSkeletonComponent', () => {
  let component: CardSkeletonComponent;
  let fixture: ComponentFixture<CardSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardSkeletonComponent],
      imports: [MaterialModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
