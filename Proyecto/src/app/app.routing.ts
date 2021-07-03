// imports necesarios
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


// importar componentes
import { EstadisticosComponent } from './components/estadisticos/estadisticos.component';






// definir las rutas
const appRoutes: Routes = [      

      {path: 'estadisticos', component: EstadisticosComponent},


    //   {path: '**', component: HomeComponent},


];

// exportar configuracion
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);




