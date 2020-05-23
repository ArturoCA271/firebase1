import { Component } from '@angular/core';
import { AutservicesService } from '../core/autservices.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  //user: User = new User();
  constructor(private service: AutservicesService, private router: Router) {}

  async ActualizaPass(){
    const user = await this.service.ActualizaContraseña((await this.service.acceso.currentUser).email);
    
    console.log('Contraseña actualizada');
  }

}
