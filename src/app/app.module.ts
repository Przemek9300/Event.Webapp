import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FullCalendarModule} from 'primeng/fullcalendar';
import { LayoutComponent } from './layout/layout.component';
import { EventManagerComponent } from './event-manager/event-manager.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenubarModule} from 'primeng/menubar';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    
    EventManagerComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FullCalendarModule,
    PanelMenuModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


  
}
