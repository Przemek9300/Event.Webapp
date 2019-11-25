import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { EventManagerComponent } from "./workspace/event-manager/event-manager.component";

const routes: Routes = [
  { path: "", redirectTo: "workspace", pathMatch: "full" },
  {
    component: LayoutComponent,
    path: "workspace",
    children: [
      {
        path: "",
        loadChildren: () =>
          import("../app/workspace/workspace.module").then(
            mod => mod.WorkspaceModule
          )
      }
    ]
  },
  {
    path: "access",
    loadChildren: () =>
      import("../app/user-access/user-access.module").then(
        mod => mod.UserAccessModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
