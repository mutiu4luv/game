import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  animations: [
    trigger('moveTrigger', [
      state('initial', style({ transform: 'translate(0, 0)' })),
      state('moved', style({ transform: 'translate(50px, 50px)' })), // Adjust the movement values
      transition('* => *', animate('300ms ease-in-out')),
    ]),
  ],
})
export class FirstComponent {
  moveState = 'initial';

  onMouseEnter() {
    this.moveState = 'moved';
  }

  onMouseLeave() {
    this.moveState = 'initial';
  }
  isMoved = false;

  moveDiv() {
    this.isMoved = true;
  }

  resetDiv() {
    this.isMoved = false;
  }
}
