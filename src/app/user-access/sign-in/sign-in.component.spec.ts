import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignInComponent],
      imports: [ReactiveFormsModule, FormsModule, MaterialModule, HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
