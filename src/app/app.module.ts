import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardModule } from './feature/dashboard/dashboard.module';
import { PublicModule } from './feature/public/public.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DashboardModule, PublicModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
