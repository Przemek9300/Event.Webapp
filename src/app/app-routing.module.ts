import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { EventManagerComponent } from './event-manager/event-manager.component';

const routes: Routes = [
  { path: "", redirectTo: "workspace", pathMatch: "full" },
  { component: LayoutComponent, path: "workspace", children: [ { component: EventManagerComponent, path: ""}, { component: EventManagerComponent, path: "1"}, { component: EventManagerComponent, path: "2"}] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
