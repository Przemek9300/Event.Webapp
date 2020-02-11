// import { Spectator, createComponentFactory } from '@ngneat/spectator';
// import { AddEventDialogComponent } from './add-event-dialog.component';
// import { MaterialModule } from 'src/app/material/material.module';
// import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
// import { CalendaryComponent } from '../../event-manager/components/calendary/calendary.component';
// import { FullCalendarModule } from '@fullcalendar/angular';
// import { provideMockStore, MockStore } from '@ngrx/store/testing';

// describe('AddEventDialogComponent', () => {
//   let spectator: Spectator<AddEventDialogComponent>;
//   const createComponent = createComponentFactory({
//     component: AddEventDialogComponent,
//     imports: [MaterialModule, FormsModule, ReactiveFormsModule, FullCalendarModule],
//     declarations: [CalendaryComponent],
//     providers: [provideMockStore({})]
//   });

//   beforeEach(() => (spectator = createComponent()));

//   it('AddEventDialogComponent', () => {
//     const fb = new FormBuilder();
//     spectator.component.dateFormGroup = fb.group({
//       date: fb.group({
//         start: [new Date(Date.now())],
//         end: ['']
//       }),

//       room: ['']
//     });
//     spectator.component.basicFormGroup = fb.group({
//       title: [''],
//       description: ['']
//     });

//     spectator.detectChanges();
//     expect(spectator.query('button')).toHaveClass('success');
//   });
// });
