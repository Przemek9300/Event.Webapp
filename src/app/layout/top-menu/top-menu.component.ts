import { Component, OnInit } from '@angular/core';
import { MyUser } from '../../../models/myUser';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  user:MyUser
  constructor() { }

  ngOnInit() {
      this.user = {
        avatar:"https://static.thenounproject.com/png/15724-200.png",
        email:"example@gmail.com"
      }
  }

}
