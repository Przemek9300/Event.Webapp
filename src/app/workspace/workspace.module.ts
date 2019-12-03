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
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './dashboard/card/card.component';
import { EventEffects } from './store/event/effects';
import { EffectsModule } from '@ngrx/effects';
import { RoomEffects } from './store/room/effects';
import { DetailsComponent } from './dashboard/details/details.component';
import { ChartComponent } from './dashboard/details/chart/chart.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InviteFormComponent } from './invite-form/invite-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmptyCardComponent } from './dashboard/empty-card/empty-card.component';
import { AddEventDialogComponent } from './dashboard/add-event-dialog/add-event-dialog.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    WorkspaceComponent,
    EventManagerComponent,
    CalendaryComponent,
    ListRoomComponent,
    DashboardComponent,
    CardComponent,
    DetailsComponent,
    ChartComponent,
    InviteFormComponent,
    EmptyCardComponent,
    AddEventDialogComponent
  ],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    SharedModule,
    StoreModule.forFeature(workspaceFeatureKey, workspaceReducers),
    EffectsModule.forFeature([EventEffects, RoomEffects]),
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents: [InviteFormComponent, AddEventDialogComponent]
})
export class WorkspaceModule {}
