import {Injectable} from '@angular/core';

import {Toast, ToastrService, ToastPackage} from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {

  constructor(private toastr: ToastrService) {
  }

  notify(title, message, ttype, pos, timeout) {
    const tconfig = {
        closeButton: true,
        timeOut: timeout,
        positionClass: 'toast-' + pos,
        toastClass: 'ngx-toastr toast-' + ttype
      }
    ;
    this.toastr.show(message, title, tconfig);
  }
}
