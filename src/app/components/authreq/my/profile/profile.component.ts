import {Component, OnInit} from '@angular/core';
import {User} from '../../../../models/user.model';
import {AuthService} from '../../../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any = {
    username: '',
    email: '',
    fullname: '',
    firstname: '',
    lastname: '',
    phone: '',
    isactive: false
  };

  constructor(private authService: AuthService) {
    this.startup();
  }

  ngOnInit(): void {
    this.startup();
  }

  async startup() {
    const res = await this.authService.regetuser('dh/api/v1/auth/user?format=json');
    // @ts-ignore
    if (res.error === 0) {
      // @ts-ignore
      this.user = res.user;
    }
  }

}
