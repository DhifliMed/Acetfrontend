import {Component} from '@angular/core';
import {LayoutService} from '../services/layout.service';
import {NavigationEnd, Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  title = 'DH SYSTEMS';

  public showLoader: any = true;
  private ngUnsubscribe = new Subject();

  constructor(private layoutService: LayoutService, private router: Router) {
    this.router.events.pipe(takeUntil(this.ngUnsubscribe)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showLoader = false;
      }
    });
  }
}
