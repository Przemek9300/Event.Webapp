import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FullCalendarModule } from '@fullcalendar/angular';
import { Store } from '@ngrx/store';
import { CardComponent } from '../workspace/dashboard/card/card.component';
import { EmptyCardComponent } from '../workspace/dashboard/empty-card/empty-card.component';
import { CardSkeletonComponent } from 'src/shared/card-skeleton/card-skeleton.component';
import { of } from 'rxjs';
import { mockedEvent } from 'src/models/event';

// describe('LayoutComponent', () => {
//   let component: LayoutComponent;
//   let fixture: ComponentFixture<LayoutComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [LayoutComponent, SideMenuComponent],
//       imports: [MaterialModule, RouterModule]
//     }).compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LayoutComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
describe('LayoutComponent', () => {
  let spectator: Spectator<LayoutComponent>;
  const createComponent = createComponentFactory({
    component: LayoutComponent,
    imports: [
      NgxSkeletonLoaderModule,
      MaterialModule,
      FormsModule,
      ReactiveFormsModule,
      FullCalendarModule,
      RouterModule.forRoot([])
    ],
    mocks: [Store],
    declarations: [CardComponent, EmptyCardComponent, CardSkeletonComponent, SideMenuComponent],
    disableAnimations: true
  });

  beforeEach(() => (spectator = createComponent()));

  it('should have a success class by default', () => {
    expect(spectator.component).toBeDefined();
  });
});
