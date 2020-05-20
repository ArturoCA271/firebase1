import { Component, OnInit } from '@angular/core';
import { AutservicesService } from '../core/autservices.service';
import { User } from '../shared/user.class';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: User = new User();
  constructor(private service: AutservicesService, private router:Router) { }
  ngOnInit() {}

  
  async ngOnlogin(){
    const user = await this.service.validaUsuario(this.user);
    
    if( user ){
      console.log('Ingreso exitoso');
      this.router.navigateByUrl('/tabs/tab1');
    }
  }


}
