import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-form-example';
  registerData = {
    name: '',
    email: '',
    password: '',
  }
  onRegister() {
    console.log(this.registerData)
  }
}
