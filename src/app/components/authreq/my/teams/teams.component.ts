import { Component, OnInit } from '@angular/core';
declare var $ : any;
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function () {
      const datatable = $('.dataTable').DataTable({
        dom: 'Bfrtip',
        buttons: [
          'csv', 'print'
        ]
      });
      datatable.buttons().container()
        .appendTo( $('.actionbtn', datatable.table().container() ) );
    });
  }

}
