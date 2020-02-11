import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartComponent } from './chart.component';
import { ChartModule } from 'primeng/components/chart/chart';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HttpClientModule } from '@angular/common/http';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { CardComponent } from '../../card/card.component';
import { EmptyCardComponent } from '../../empty-card/empty-card.component';
import { CardSkeletonComponent } from 'src/shared/card-skeleton/card-skeleton.component';
import { SideMenuComponent } from 'src/app/layout/side-menu/side-menu.component';
import { CalendaryComponent } from 'src/app/workspace/event-manager/components/calendary/calendary.component';
import { mockedEvent } from 'src/models/event';
import { mockedRoom } from 'src/models/room';

describe('ChartComponent', () => {
  let spectator: Spectator<ChartComponent>;
  const createComponent = createComponentFactory({
    component: ChartComponent,
    imports: [
      NgxSkeletonLoaderModule,
      MaterialModule,
      FormsModule,
      ReactiveFormsModule,
      FullCalendarModule,
      HttpClientModule,
      ChartModule,

      NgxQRCodeModule,
      RouterModule.forRoot([])
    ],
    mocks: [Store],
    declarations: [CardComponent, EmptyCardComponent, CardSkeletonComponent, SideMenuComponent, CalendaryComponent],
    disableAnimations: true
  });

  beforeEach(
    () =>
      (spectator = createComponent({
        props: {
          members: [],
          room: mockedRoom
        }
      }))
  );

  it('ChartComponent', () => {
    expect(spectator.component).toBeDefined();
  });
});
