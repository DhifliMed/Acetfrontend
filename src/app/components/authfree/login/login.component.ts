import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {User} from '../../../models/user.model';
import {ToastService} from '../../../services/toast.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  authparams: any = {username: '', password: ''};

  constructor(private authService: AuthService, private toastr: ToastService, private router: Router) {
  }

  ngOnInit(): void {
  }


  async login() {
    // @ts-ignore
  if ((await this.authService.login('dh/api/v1/auth/login?format=json', this.authparams.username, this.authparams.password)).error === 0) {
      this.toastr.notify('logged in', 'redirecting', 'success', 'top-full-width', 1000);
      this.router.navigate(['my']);
    } else {
      this.toastr.notify('Wrong Credentials', 'failed to log you in', 'error', 'top-full-width',1000);
    }
  }
}
