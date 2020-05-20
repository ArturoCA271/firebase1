import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutservicesService } from '../core/autservices.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: AutservicesService, private router: Router) {  }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  Observable<boolean 
  | UrlTree> 
  | Promise<boolean 
  | UrlTree> 
  | boolean 
  | UrlTree {
      if(this.service.respuesta){
          return true;
      }
      else{
        console.log('acceso denegado');
        this.router.navigateByUrl('/login');
        return false;
      }
      
      
  }
  
}
