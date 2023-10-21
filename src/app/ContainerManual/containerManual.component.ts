// This is a typescript class we use Component Decorater to make class as component.
//We have to import Component from the @angular/core
// export keyword make sure that this class is available to use in another components

import { Component } from '@angular/core';

//Inine template and styles
// @Component({
//   selector: '<component></component>',
//   template: `<h1>Welcome to Angular!</h1>`,
//   styles: [
//     `
//       h1 {
//         color: red;
//       }
//     `,
//   ],
// })

@Component({
  selector: '<component></component>',
  templateUrl: './containerManual.component.html',
  styleUrls: ['./containerManual.component.css'],
})
export class ContainerManual {}
