import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EventManagerComponent } from "./event-manager/event-manager.component";
import { WorkspaceComponent } from "./workspace-component/workspace.component";
import { DashboardComponent } from "./dashboard/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: WorkspaceComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "planning", component: EventManagerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule {}
