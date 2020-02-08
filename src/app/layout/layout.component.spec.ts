import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from './side-menu/side-menu.component';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutComponent, SideMenuComponent],
      imports: [MaterialModule, RouterModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
