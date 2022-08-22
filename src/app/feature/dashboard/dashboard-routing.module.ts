import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { EstadisticaComponent } from './components/estadistica/estadistica.component';
import { IngresoEgresoComponent } from './components/ingreso-egreso/ingreso-egreso.component';
import { DetalleComponent } from './components/detalle/detalle.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,

    children: [
      {
        path: '',
        component: EstadisticaComponent,
      },
      {
        path: 'ingreso-egreso',
        component: IngresoEgresoComponent,
      },
      {
        path: 'detalle',
        component: DetalleComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
