import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { IngresoEgresoComponent } from './components/ingreso-egreso/ingreso-egreso.component';
import { EstadisticaComponent } from './components/estadistica/estadistica.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    DashboardComponent,
    IngresoEgresoComponent,
    EstadisticaComponent,
    DetalleComponent,
    SidebarComponent,
    NavbarComponent,
  ],
  exports: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
