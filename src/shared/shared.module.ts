import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FullCalendarModule } from "primeng/fullcalendar";
import { PanelMenuModule } from "primeng/panelmenu";
import { MenubarModule } from "primeng/menubar";

@NgModule({
  declarations: [],
  exports: [CommonModule, FullCalendarModule, PanelMenuModule, MenubarModule]
})
export class SharedModule {}
