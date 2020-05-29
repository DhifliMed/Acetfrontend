import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {LayoutService} from '../../../services/layout.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent implements OnInit, OnDestroy {

  public smallLeftBar: boolean = false;
  public smallLeftBarClass: string = '';
  public darkLayout: boolean = false;
  public settingsVisible: boolean = false;
  public rightSidebarVisible: boolean = true;
  public searchVisible: boolean = false;
  public currentTheme: string = 'theme-blue';
  private ngUnsubscribe = new Subject();

  constructor(private layoutService: LayoutService, private router: Router) {

    this.layoutService.smallLeftBarShow.pipe(takeUntil(this.ngUnsubscribe)).subscribe(leftBarStatus => {
      this.smallLeftBar = leftBarStatus;

      if (this.smallLeftBar) {
        this.smallLeftBarClass = 'ls-toggle-menu';
      } else {
        this.smallLeftBarClass = '';
      }
    });

    this.layoutService.settingsShow.pipe(takeUntil(this.ngUnsubscribe)).subscribe(value => {
      this.settingsVisible = value;
    });

    this.layoutService.darkLayoutShow.pipe(takeUntil(this.ngUnsubscribe)).subscribe(value => {
      this.darkLayout = value;
    });

    this.layoutService.rightSidebarShow.pipe(takeUntil(this.ngUnsubscribe)).subscribe(value => {
      this.rightSidebarVisible = value;
    });

    this.layoutService.searchShow.pipe(takeUntil(this.ngUnsubscribe)).subscribe(value => {
      this.searchVisible = value;
    });

    this.layoutService.themeChange.pipe(takeUntil(this.ngUnsubscribe)).subscribe(value => {
      this.currentTheme = value;
    });
  }

  ngOnInit() {
    $('.right_icon_toggle_btn').on('click', () => {
      $('body').toggleClass('right_icon_toggle');
    });
    $('.mobile_menu').on('click', () => {
      $('.sidebar').toggleClass('open');
    });
    $('.boxs-close').on('click', () => {
      $(this).parents('.card').addClass('closed').fadeOut();
    });
    $('.list_btn').on('click', () => {
      $('.chat_list').toggleClass('open');
    });
    $('.ls-toggle-btn').on('click', () => {
      $('body').toggleClass('ls-toggle-menu');
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  toggleSetting() {
    this.layoutService.toggleSettings();
  }

  hideSearch() {
    this.layoutService.hideSearch();
  }

}
