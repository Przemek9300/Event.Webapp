// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { DetailsComponent } from './details.component';
// import { ChartModule } from 'primeng/chart';
// import { NgxQRCodeModule } from 'ngx-qrcode2';
// import { CalendaryComponent } from '../../event-manager/components/calendary/calendary.component';
// import { mockedEvent } from 'src/models/event';
// import { WorkspaceModule } from '../../workspace.module';
// import { mockedRoom } from 'src/models/room';
// import { Spectator, createComponentFactory } from '@ngneat/spectator';
// import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
// import { MaterialModule } from 'src/app/material/material.module';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FullCalendarModule } from '@fullcalendar/angular';
// import { HttpClientModule } from '@angular/common/http';
// import { RouterModule } from '@angular/router';
// import { Store } from '@ngrx/store';
// import { CardComponent } from '../card/card.component';
// import { EmptyCardComponent } from '../empty-card/empty-card.component';
// import { CardSkeletonComponent } from 'src/shared/card-skeleton/card-skeleton.component';
// import { SideMenuComponent } from 'src/app/layout/side-menu/side-menu.component';

// describe('DetailsComponent', () => {
//   let spectator: Spectator<DetailsComponent>;
//   const createComponent = createComponentFactory({
//     component: DetailsComponent,
//     imports: [
//       NgxSkeletonLoaderModule,
//       MaterialModule,
//       FormsModule,
//       ReactiveFormsModule,
//       FullCalendarModule,
//       HttpClientModule,
//       NgxQRCodeModule,
//       RouterModule.forRoot([])
//     ],
//     mocks: [Store],
//     declarations: [CardComponent, EmptyCardComponent, CardSkeletonComponent, SideMenuComponent, CalendaryComponent],
//     disableAnimations: true
//   });

//   beforeEach(() => (spectator = createComponent()));

//   it('DetailsComponent', () => {
//     spectator.component.event = mockedEvent;
//     spectator.detectChanges();
//     expect(spectator.component).toBeDefined();
//   });
// });
