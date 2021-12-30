import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

//antes de trabajar con el modulo tengo que especificar las rutas
const app_routes: Routes = [
    {path: 'home', component: PortafolioComponent},
    {path: 'about', component: AboutComponent}, //el que sería el ELSE de la ruta va despues!!! 
    {path: 'item', component: ItemComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}//ruta excepción (si no es ninguna de las de arriba)
];

@NgModule({  //  el decorador
    imports:[
        RouterModule.forRoot(app_routes, { useHash: true })  //definir el routermodule que le va a decir a angular si son rutas principales o hijas
        //forRoot si es a la raiz y forChild si feran rutas hijas
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {}