import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FullCalendarModule } from "primeng/fullcalendar";
import { PanelMenuModule } from "primeng/panelmenu";
import { MenubarModule } from "primeng/menubar";
import {TabMenuModule} from 'primeng/tabmenu';
import {ChartModule} from 'primeng/chart';
import {ProgressBarModule} from 'primeng/progressbar';
@NgModule({
  imports:[ ],
  declarations: [],
  exports: [CommonModule, FullCalendarModule, PanelMenuModule, MenubarModule,TabMenuModule, ChartModule,ProgressBarModule ]
})
export class SharedModule {}
