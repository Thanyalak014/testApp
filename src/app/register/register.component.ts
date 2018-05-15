import {Router} from '@angular/router';
import { Component } from '@angular/core';

@Component({
 // selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
// tslint:disable-next-line:class-name
export class registerComponent {
  constructor(
    private router: Router,
  ) { }
}
