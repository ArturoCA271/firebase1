import { Injectable } from '@angular/core';
import { User } from '../shared/user.class';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AutservicesService {

  public respuesta:any = false;
  constructor(public acceso: AngularFireAuth) 
  {
    acceso.authState.subscribe(user => (this.respuesta = user));
  }



  async validaUsuario(user: User){

    try
    {
      return this.acceso.signInWithEmailAndPassword(user.email, user.password);
    }
    catch(error){
      console.log('Usuario invalido', error);
    }
  }


  async RegistraUsuario(user: User){
    try
    {
      return this.acceso.createUserWithEmailAndPassword(user.email, user.password);
    }
    catch(error){
      console.log('Error al crear usuario')
    }
  }


  async ActualizaContraseña(email: string){
    try
    {
      return this.acceso.sendPasswordResetEmail(email);
    }
    catch(error){
      console.log('Error al crear usuario')
    }
  }




}
