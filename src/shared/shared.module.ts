import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';
import { ChartModule } from 'primeng/chart';
import { ProgressBarModule } from 'primeng/progressbar';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!
@NgModule({
  imports: [],
  declarations: [],
  exports: [
    CommonModule,
    FullCalendarModule,
    PanelMenuModule,
    MenubarModule,
    TabMenuModule,
    ChartModule,
    ProgressBarModule,
    CardModule,
    CarouselModule,
    ButtonModule,
    VirtualScrollerModule,
    NgxQRCodeModule
  ]
})
export class SharedModule {}
