import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import {AuthService} from '../services/auth.service';
import { User } from '../shared/user.class';
import { AutservicesService } from '../services/auth.service';
=======
import { AutservicesService } from '../core/autservices.service';
import { User } from '../shared/user.class';
import { Router } from '@angular/router';



>>>>>>> versionqr

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: User = new User();
<<<<<<< HEAD
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

=======
  constructor(private service: AutservicesService, private router:Router) { }
  ngOnInit() {}

  
  async ngOnlogin(){
    const user = await this.service.validaUsuario(this.user);
    
    if( user ){
      console.log('Ingreso exitoso');
      this.router.navigateByUrl('/tabs/tab1');
    }
  }


>>>>>>> versionqr
}
