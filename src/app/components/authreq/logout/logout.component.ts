import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {ToastService} from '../../../services/toast.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private toastr: ToastService, private router: Router) {
  }

  ngOnInit(): void {
    this.logout();
  }

  async logout() {
    if ((await this.authService.logout('dh/api/v1/auth/logout?format=json'))) {
      this.toastr.notify('Logout successfull', 'redirecting', 'warning', 'top-full-width', 1000);
      this.router.navigate(['login']);
    }
  }

}
