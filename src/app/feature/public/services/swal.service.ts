import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SwalService {
  constructor() {}

  showAlertError(message: string, title: string = 'Algo salio mal'): void {
    Swal.fire({
      icon: 'error',
      title: title,
      text: message,
    });
  }

  openLoading(title: string = 'espere por favor'): void {
    Swal.fire({
      title: title,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

  closeLoading(): void {
    Swal.close();
  }
}
