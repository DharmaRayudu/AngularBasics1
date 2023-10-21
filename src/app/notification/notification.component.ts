import { Component } from '@angular/core';

//If you want to use selector like HTML attribute or css
/**
 *   selector: '[app-notification]',
 *   <div app-notification>
 *   selector as css
 *  .app-notification
 *  <div class='app-notification'>
 */
@Component({
  selector: '.app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent {
  note: string = 'This website uses cookies to provide better user experiance.';

  displayNote: boolean = false;

  closeNotification() {
    this.displayNote = true;
  }
}
