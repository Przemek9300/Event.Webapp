// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { DashboardComponent } from './dashboard.component';
// import { Spectator, createComponentFactory, mockProvider } from '@ngneat/spectator';
// import { MaterialModule } from 'src/app/material/material.module';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FullCalendarModule } from '@fullcalendar/angular';
// import { RouterModule } from '@angular/router';
// import { provideMockStore } from '@ngrx/store/testing';
// import { of } from 'rxjs';
// import { CalendaryComponent } from '../event-manager/components/calendary/calendary.component';
// import { CardComponent } from './card/card.component';
// import { EmptyCardComponent } from './empty-card/empty-card.component';
// import { CardSkeletonComponent } from 'src/shared/card-skeleton/card-skeleton.component';
// import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
// import { mockedEvent } from 'src/models/event';
// import { Store } from '@ngrx/store';

// describe('DashboardComponent', () => {
//   let spectator: Spectator<DashboardComponent>;
//   const createComponent = createComponentFactory({
//     component: DashboardComponent,
//     imports: [
//       NgxSkeletonLoaderModule,
//       MaterialModule,
//       FormsModule,
//       ReactiveFormsModule,
//       FullCalendarModule,
//       RouterModule.forRoot([])
//     ],
//     mocks: [Store],
//     declarations: [CardComponent, EmptyCardComponent, CardSkeletonComponent]
//   });

//   beforeEach(() => (spectator = createComponent()));

//   it('should have a success class by default', () => {
//     let store = spectator.get(Store);
//     console.log(store);
//     store.pipe.and.returnValue(of([mockedEvent]));

//     spectator.detectChanges();
//     expect(spectator.component).toBeDefined();
//   });
// });
