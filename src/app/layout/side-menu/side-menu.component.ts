import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

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
  public currentPath:string
  constructor(private router: Router) {}

  ngOnInit() {
    this.currentPath = this.router.url
    this.items = [
      { label: "Dashboard", class: [], link: "" , icon:"home" },
      { label: "Planning", class: [], link: "planning", icon:"assessment" },
      { label: "Dashboard", class: [], link: "" , icon:"home" },
      { label: "Planning", class: [], link: "planning", icon:"assessment" },
      
    ];
  }
}
