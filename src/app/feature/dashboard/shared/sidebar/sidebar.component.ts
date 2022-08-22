import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../../../public/services/auth.service';
import { SwalService } from 'src/app/feature/public/services/swal.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router,
    private swalService: SwalService
  ) {}

  ngOnInit(): void {}

  logout(): void {
    this.swalService.openLoading();
    this.auth
      .logout()
      .then(() => {
        this.swalService.closeLoading();
        this.router.navigate(['./login']);
      })
      .catch((error) => {
        this.swalService.showAlertError(error.message, 'Algo salio mal');
      });
  }
}
