import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSkeletonComponent } from './card-skeleton.component';
import { MaterialModule } from 'src/app/material/material.module';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { CardComponent } from 'src/app/workspace/dashboard/card/card.component';
import { EmptyCardComponent } from 'src/app/workspace/dashboard/empty-card/empty-card.component';
import { SideMenuComponent } from 'src/app/layout/side-menu/side-menu.component';

describe('CardSkeletonComponent', () => {
  let spectator: Spectator<CardSkeletonComponent>;
  const createComponent = createComponentFactory({
    component: CardSkeletonComponent,
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
