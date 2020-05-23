import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import {AuthService} from '../services/auth.service';
import { User } from '../shared/user.class';

=======
import { AutservicesService } from '../core/autservices.service';
import { User } from '../shared/user.class';
import { Router } from '@angular/router';
>>>>>>> versionqr

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: User = new User();
<<<<<<< HEAD

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {}
  

  async onRegister(){
    const user = await this.authSvc.onRegister(this.user);
    if( user ){
      console.log('Usuario creado exitosamente');
      this.router.navigateByUrl('/');
    }
    else{
      console.log('Error al crear usuario');
    }
    
  }

  /*async onLogin(){
    const user = await this.authSvc.onLogin(this.user);
  }*/

=======
  constructor(private service: AutservicesService, private router: Router) { }

  ngOnInit() {
  }
  async ngOnRegister(){
    const user = await this.service.RegistraUsuario(this.user);
    if( user ){
      console.log('Ingreso exitoso');
      this.router.navigateByUrl('/tabs/tab1');
    }
  }
>>>>>>> versionqr
}
