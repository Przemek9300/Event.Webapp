import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './workspace-component/workspace.component';
import { EventManagerComponent } from './event-manager/event-manager.component';
import { SharedModule } from 'src/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { workspaceReducers, workspaceFeatureKey } from './store/workspace-state';
import { CalendaryComponent } from 'src/app/workspace/event-manager/components/calendary/calendary.component';
import { ListRoomComponent } from './event-manager/components/list-room/list-room.component';

@NgModule({
  declarations: [WorkspaceComponent, EventManagerComponent, CalendaryComponent, ListRoomComponent],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    SharedModule,
    StoreModule.forFeature(workspaceFeatureKey, workspaceReducers)
  ],
})
export class WorkspaceModule { }
