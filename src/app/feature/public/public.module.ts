import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PublicComponent } from './public.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, PublicComponent],
  imports: [CommonModule, PublicRoutingModule],
  exports: [PublicComponent],
})
export class PublicModule {}
