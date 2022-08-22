import { Component, OnInit } from '@angular/core';
import { AuthService } from './feature/public/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'IngresoEgresoApp';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.initAuthListener();
  }
}
