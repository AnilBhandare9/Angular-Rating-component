import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-rating';

  ratingThumsUp = {
    type: 'number',
    value: 30,
    min: 10,
    max: 100,
    step: 10,
    input: true,
    color: ['#ff0000', '#ffa500', '#ffd280', '#008000']
};

onThumsUp($event) {
  this.ratingThumsUp.value = $event;
}
}
