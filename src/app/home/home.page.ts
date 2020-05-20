import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private authSvc: AuthService, private router: Router, private afAuth: AngularFireAuth){}
  async onLogout(){
    console.log('Cerrando sesion');
    this.afAuth.signOut();
    this.router.navigateByUrl('/login');
  }
}
