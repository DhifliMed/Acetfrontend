import {Injectable} from '@angular/core';
import {Subject, throwError, Observable, BehaviorSubject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import {map} from 'rxjs/operators';
import {User} from '../models/user.model';
import {ActivatedRouteSnapshot, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiuri: string;
  fullauthparams: any = {};
  headers: any = {'Content-Type': 'application/json'};
  private httpOptions;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    this.apiuri = environment.apiUrl;
  }

  async regetuser(userurl) {
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json', Authorization: 'Token ' + this.get94a08da1fecbb6e8b46990538c7b50b2()})
    };
    return await new Promise((resolve, reject) => {
      this.http.get(this.apiuri + userurl, options).subscribe((res: any) => {
          if (res.user) {
            const user: User = {
              username: res.user.username,
              email: res.user.email,
              fullname: res.user['full name'],
              firstname: res.user['first name'],
              lastname: res.user['last name'],
              phone: res.user.phone,
              isactive: res.user.is_active
            };
            resolve({user, error: 0});
          } else {
            resolve({user: {}, error: 1});
          }
        },
        (error) => {
          resolve({user: {}, error: 1});
        }
      );
    }).then((data) => {
      return data;
    }).catch((data) => {
      return {user: {}, error: 1};
    });
  }

  async login(loginurl: string, username: string, password: string) {
    return await new Promise((resolve, reject) => {
      this.http.post(this.apiuri + loginurl, {username, password}, this.httpOptions).subscribe(
        (res: any) => {
          if (res.user) {
            const user: User = {
              username: res.user.username,
              email: res.user.email,
              fullname: res.user['full name'],
              firstname: res.user['first name'],
              lastname: res.user['last name'],
              phone: res.user.phone,
              isactive: res.user.is_active
            };
            localStorage.setItem('t94a08da1fecbb6e8b46990538c7b50b2', res.token);
            resolve({user, error: 0});
          } else {
            resolve({user: {}, error: 1});
          }
        },
        (error) => {
          resolve({user: {}, error: 1});
        }
      );
    });
  }

  async signup(signupurl: string, username: string, first_name: string, last_name: string, email: string, phone: string, password: string, confirmpassword: string) {
    return await new Promise((resolve, reject) => {
      this.http.post(this.apiuri + signupurl, {
      username,
      first_name,
      last_name,
      email,
      phone,
      password,
      confirmpassword
    }, this.httpOptions).subscribe(
      (res: any) => {
        if (res.user) {
          const user: User = {
            username: res.user.username,
            email: res.user.email,
            fullname: res.user['full name'],
            firstname: res.user['first name'],
            lastname: res.user['last name'],
            phone: res.user.phone,
            isactive: res.user.is_active
          };
          localStorage.setItem('t94a08da1fecbb6e8b46990538c7b50b2', res.token);
          resolve({user, error: 0});
        } else {
          resolve({user: {}, error: 1});
        }
      },
        (error) => {
          resolve({user: {}, error: 1});
        }
    );
  });
  }

  async logout(logouturl: string) {
    return await new Promise((resolve, reject) => {
      this.http.get(this.apiuri + logouturl).subscribe((res: any) => {
          localStorage.removeItem('t94a08da1fecbb6e8b46990538c7b50b2');
          resolve(true);
        },
        (error) => {
          localStorage.removeItem('t94a08da1fecbb6e8b46990538c7b50b2');
          resolve(true);
        });
    });
  }

  get94a08da1fecbb6e8b46990538c7b50b2() {
    return localStorage.getItem('t94a08da1fecbb6e8b46990538c7b50b2');
  }

}
