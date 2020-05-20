import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../shared/user.class';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogged: any = false;

  constructor(private afAuth: AngularFireAuth) { 
    afAuth.authState.subscribe(user => (this.isLogged = user));
  }

  //Login
  async onLogin(user: User){
    try{
      return this.afAuth.signInWithEmailAndPassword(user.email, user.password);
    }
    catch(error){
      console.log('Error al ingresar', error);
    }

  }
  //registrar
  async onRegister(user: User){
    try{
      return await this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
    }
    catch(error){
        console.log("Error al registrar", error);
    }
  }
}
