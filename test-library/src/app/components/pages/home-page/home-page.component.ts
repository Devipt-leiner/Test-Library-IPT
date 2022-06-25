import { Component, OnInit } from '@angular/core';
import { ParametersService } from 'iptdevs-design-system';




@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  template: string = 'home';

  englishLevels: any[] = [];

  constructor (private parametersService: ParametersService) {}

  isClickedHome() {
    this.template = 'home';
  }

  isClickedLogin() {
    this.template = 'login'
  }

  isClickedForm() {
    this.template = 'form'
  }

  getLevels() {
    this.parametersService.getLevels().subscribe((response) => {
      console.log(response.data);
      this.englishLevels = response.data;
    })
  }

}
