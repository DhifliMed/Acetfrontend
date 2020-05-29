import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NonauthmiddlewareService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {
  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    // @ts-ignore
    if ((await this.authService.regetuser('dh/api/v1/auth/user?format=json')).error === 0) {
      this.router.navigate(['my']);
      return false;
    }
    return true;
  }
}
