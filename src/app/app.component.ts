import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'myfirstapp-root ',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TestProject';
constructor(public router: Router){

}



  

}
