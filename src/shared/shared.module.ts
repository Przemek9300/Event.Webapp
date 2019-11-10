import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FullCalendarModule } from "primeng/fullcalendar";
import { PanelMenuModule } from "primeng/panelmenu";
import { MenubarModule } from "primeng/menubar";
import {TabMenuModule} from 'primeng/tabmenu';

@NgModule({
  imports:[ ],
  declarations: [],
  exports: [CommonModule, FullCalendarModule, PanelMenuModule, MenubarModule,TabMenuModule]
})
export class SharedModule {}
