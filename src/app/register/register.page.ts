import { Component, OnInit } from '@angular/core';
import { AutservicesService } from '../core/autservices.service';
import { User } from '../shared/user.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: User = new User();
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
}
