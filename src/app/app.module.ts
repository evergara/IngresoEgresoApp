import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthModule } from './feature/auth/auth.module';
import { DashboardModule } from './feature/dashboard/dashboard.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, DashboardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
