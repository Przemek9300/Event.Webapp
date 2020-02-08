import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceComponent } from './workspace.component';
import { RouterModule } from '@angular/router';

describe('WorkspaceComponent', () => {
  let component: WorkspaceComponent;
  let fixture: ComponentFixture<WorkspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorkspaceComponent],
      imports: [RouterModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
