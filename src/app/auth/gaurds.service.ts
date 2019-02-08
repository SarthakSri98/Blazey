import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { BaseService } from '../services/base.service';
@Injectable({
  providedIn: 'root'
})
export class GaurdsService implements CanActivate {

  constructor(private _base: BaseService, private _router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this._base.isAuthenticated)
    {
      return true;
    }
    this._router.navigate(['']);
    return false;
  
  }
}
