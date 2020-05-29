import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import {takeUntil, timeout} from 'rxjs/operators';
import {LayoutService} from '../../../services/layout.service';
import {NavigationEnd, Router} from '@angular/router';
import {Subject} from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit, AfterViewInit  {

  public showLoader: any = true;
  private ngUnsubscribe = new Subject();
  constructor(private layoutService: LayoutService, private router: Router) {
    this.router.events.pipe(takeUntil(this.ngUnsubscribe)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        $('.lpc').addClass('loaded').removeAttr('style');
        this.showLoader = false;
      }
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.router.events.pipe(takeUntil(this.ngUnsubscribe)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          $('.lpc').addClass('loaded').removeAttr('style');
        }, 1500);
      }
    });
  }

  scrollToElement($element): void {
    $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

  togglesidemenu(): void {
    const elem = $('.side-menu__block');
    elem.toggleClass('active');
  }

  hidesidemenu(): void {
    const elem = $('.side-menu__block');
    elem.removeClass('active');
  }

  @HostListener('window:scroll', ['$event'])
  onscroll(event): void {
    const verticalOffset = window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0;
    const elem = $('#main-nav');
    if (verticalOffset > 50) {
      if (!elem.hasClass('stricked-menu stricky-fixed')) {
        $('#main-nav').addClass('stricked-menu stricky-fixed');
      }
    } else {
      $('#main-nav').removeClass('stricked-menu stricky-fixed');
    }
  }
}
