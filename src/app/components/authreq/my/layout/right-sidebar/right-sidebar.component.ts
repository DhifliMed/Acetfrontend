import {Component, OnInit} from '@angular/core';
import {LayoutService} from '../../../../../services/layout.service';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss']
})
export class RightSidebarComponent implements OnInit {

  constructor(private layoutService: LayoutService) {
  }

  ngOnInit() {
  }

  toggleSetting() {
  }

  togglelightdark() {
    this.layoutService.togglelightdark();
  }

  showSearch() {
    this.layoutService.showSearch();
  }
}
