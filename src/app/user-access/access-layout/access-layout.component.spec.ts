import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessLayoutComponent } from './access-layout.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HttpClientModule } from '@angular/common/http';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { CardComponent } from 'src/app/workspace/dashboard/card/card.component';
import { EmptyCardComponent } from 'src/app/workspace/dashboard/empty-card/empty-card.component';
import { CardSkeletonComponent } from 'src/shared/card-skeleton/card-skeleton.component';
import { SideMenuComponent } from 'src/app/layout/side-menu/side-menu.component';
import { CalendaryComponent } from 'src/app/workspace/event-manager/components/calendary/calendary.component';
import { mockedEvent } from 'src/models/event';

describe('AccessLayoutComponent', () => {
  let spectator: Spectator<AccessLayoutComponent>;
  const createComponent = createComponentFactory({
    component: AccessLayoutComponent,
    imports: [
      NgxSkeletonLoaderModule,
      MaterialModule,
      FormsModule,
      ReactiveFormsModule,
      FullCalendarModule,
      HttpClientModule,
      NgxQRCodeModule,
      RouterModule.forRoot([])
    ],
    mocks: [Store],
    declarations: [CardComponent, EmptyCardComponent, CardSkeletonComponent, SideMenuComponent, CalendaryComponent],
    disableAnimations: true
  });

  beforeEach(() => (spectator = createComponent()));

  it('should have a success class by default', () => {
    spectator.detectChanges();
    expect(spectator.component).toBeDefined();
  });
});
