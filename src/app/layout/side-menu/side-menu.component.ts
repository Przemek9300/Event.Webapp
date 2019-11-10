import { Component, OnInit } from "@angular/core";

interface MenuItem {
  label: string;
  icon: string,
  link: string;
  class: string[];
}

@Component({
  selector: "app-side-menu",
  templateUrl: "./side-menu.component.html",
  styleUrls: ["./side-menu.component.scss"]
})
export class SideMenuComponent implements OnInit {
  public items: MenuItem[];
  constructor() {}

  ngOnInit() {
    this.items = [
      { label: "Dashboard", class: [], link: "" , icon:"pi pi-home" },
      { label: "Planning", class: [], link: "planning", icon:"pi pi-clock" },
      { label: "Users", class: [], link: "planning", icon:"pi pi-chart-bar" }
    ];
  }
}
