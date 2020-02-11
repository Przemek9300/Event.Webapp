// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { WorkspaceComponent } from './workspace.component';
// import { RouterModule } from '@angular/router';

// describe('WorkspaceComponent', () => {
//   let component: WorkspaceComponent;
//   let fixture: ComponentFixture<WorkspaceComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [WorkspaceComponent],
//       imports: [RouterModule]
//     }).compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(WorkspaceComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';

import { FullCalendarModule } from '@fullcalendar/angular';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { RouterModule } from '@angular/router';
import { WorkspaceComponent } from './workspace.component';

describe('WorkspaceComponent', () => {
  let spectator: Spectator<WorkspaceComponent>;
  const createComponent = createComponentFactory({
    component: WorkspaceComponent,
    imports: [MaterialModule, FormsModule, ReactiveFormsModule, FullCalendarModule, RouterModule.forRoot([])],
    providers: [provideMockStore({})]
  });

  beforeEach(() => (spectator = createComponent()));

  it('should have a success class by default', () => {
    spectator.detectChanges();
    expect(spectator.component).toBeDefined();
  });
});
