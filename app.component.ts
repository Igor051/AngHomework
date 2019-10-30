import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'h1';
  test: string = 'hello Angular';
  inputetValue: string = '';
  clickValue: string = '';
  statusRegister: boolean = false;
  statusLogin: boolean = false;
  houses=[{
    quadrature:85,
    street:'Shevchenka',
    price:23500
  },{
    quadrature:74,
    street:'Pupkina',
    price:19830
  },{
    quadrature:92,
    street:'Stusa',
    price:34500
  },
  ];

  onInput(ev) {
    this.inputetValue = ev.target.value;
  }

  onClick() {
    this.clickValue = this.inputetValue
  }

  showLogin() {
    this.statusLogin=!this.statusLogin;
    this.statusRegister=false
  }

  showRegister() {
    this.statusRegister=!this.statusRegister;
    this.statusLogin=false
  }
}
