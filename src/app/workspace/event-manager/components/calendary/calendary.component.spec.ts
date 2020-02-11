import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendaryComponent } from './calendary.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { CardComponent } from 'src/app/workspace/dashboard/card/card.component';
import { EmptyCardComponent } from 'src/app/workspace/dashboard/empty-card/empty-card.component';
import { CardSkeletonComponent } from 'src/shared/card-skeleton/card-skeleton.component';
import { SideMenuComponent } from 'src/app/layout/side-menu/side-menu.component';
import { mockedEvent } from 'src/models/event';
import { of } from 'rxjs';

describe('CalendaryComponent', () => {
  let spectator: Spectator<CalendaryComponent>;
  const createComponent = createComponentFactory({
    component: CalendaryComponent,
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

  beforeEach(
    () =>
      (spectator = createComponent({
        props: {
          events$: of([mockedEvent])
        }
      }))
  );

  it('should have a success class by default', () => {
    spectator.detectChanges();
    expect(spectator.component).toBeDefined();
  });
});
