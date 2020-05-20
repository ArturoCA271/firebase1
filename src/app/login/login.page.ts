import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../services/auth.service';
import { User } from '../shared/user.class';
import { AutservicesService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: User = new User();
  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
  }
  async onLogin(){
    const user =  await this.authSvc.onLogin(this.user);
    
    if( user ){
      console.log('Ingreso exitoso');
      this.router.navigateByUrl('/');
    }
  }

}
