import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {ToastService} from '../../../services/toast.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  authparams: any = {
    username: '',
    first_name: '',
    last_name: '',
    emai: '',
    phone: '',
    password: '',
    confirmpassword: '',
  };

  constructor(private authService: AuthService, private toastr: ToastService, private router: Router) {
  }

  ngOnInit(): void {
  }

  async signup() {
    // @ts-ignore
    if ((await this.authService.signup('dh/api/v1/auth/signup?format=json', this.authparams.username, this.authparams.first_name, this.authparams.last_name, this.authparams.email, this.authparams.phone, this.authparams.password, this.authparams.confirmpassword)).error === 0) {
      this.toastr.notify('your registration was successful ', 'redirecting', 'success', 'top-full-width', 1000);
      this.router.navigate(['my']);
    } else {
      this.toastr.notify('Wrong Credentials', 'failed to log you in', 'error', 'top-full-width', 1000);
    }
  }

}
