import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  //One way data bining we use string interpolation {{}}
  slogan: string = 'Shop for everything🤷‍♀️🤷';

  //Propery data binding we use [] to wrap html attribute and assign class property
  source: string = '/assets/shoping.jpg';

  getSlogan() {
    return 'We can get from method using Interpolation';
  }
}
