import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access-layout',
  templateUrl: './access-layout.component.html',
  styleUrls: ['./access-layout.component.scss']
})
export class AccessLayoutComponent implements OnInit {
  navLinks: any[];

  constructor() {
    this.navLinks = [
      {
        label: 'Sign in',
        link: './signin',
        index: 0
      },
      {
        label: 'Sign up',
        link: './signup',
        index: 1
      },
      {
        label: 'Forgot Password',
        link: './password',
        index: 2
      }
    ];
  }

  ngOnInit() {}
}
