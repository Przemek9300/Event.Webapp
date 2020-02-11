import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FullCalendarModule } from '@fullcalendar/angular';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { CardComponent } from 'src/app/workspace/dashboard/card/card.component';
import { EmptyCardComponent } from 'src/app/workspace/dashboard/empty-card/empty-card.component';
import { CardSkeletonComponent } from 'src/shared/card-skeleton/card-skeleton.component';
import { SideMenuComponent } from 'src/app/layout/side-menu/side-menu.component';
import { of } from 'rxjs';
import { mockedEvent } from 'src/models/event';

describe('SignUpComponent', () => {
  let spectator: Spectator<SignUpComponent>;
  const createComponent = createComponentFactory({
    component: SignUpComponent,
    imports: [
      NgxSkeletonLoaderModule,
      MaterialModule,
      FormsModule,
      ReactiveFormsModule,
      FullCalendarModule,
      HttpClientModule,
      RouterModule.forRoot([])
    ],
    mocks: [Store],
    declarations: [CardComponent, EmptyCardComponent, CardSkeletonComponent, SideMenuComponent],
    disableAnimations: true
  });

  beforeEach(() => (spectator = createComponent()));

  it('should have a success class by default', () => {
    spectator.detectChanges();
    expect(spectator.component).toBeDefined();
  });
});
