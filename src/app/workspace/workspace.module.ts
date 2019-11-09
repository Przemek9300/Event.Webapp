import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './workspace-component/workspace.component';
import { EventManagerComponent } from './event-manager/event-manager.component';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [WorkspaceComponent, EventManagerComponent],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    SharedModule
  ],
})
export class WorkspaceModule { }
