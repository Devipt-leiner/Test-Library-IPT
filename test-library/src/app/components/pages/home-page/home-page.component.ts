import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  template: string = 'home';

  isClickedHome() {
    this.template = 'home';
  }

  isClickedLogin() {
    this.template = 'login'
  }

  isClickedForm() {
    this.template = 'form'
  }

}
