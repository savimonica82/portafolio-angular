import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   //infoPaginaService es una variable de tipo infoPaginaService  y angular va a llamar el constructor de InfoPaginaService
  constructor( public infoPaginaService: InfoPaginaService,
              public productoService: ProductosService){ //utilizo el guion bajo _infoPagina para decir que es un servicio o si no lo llamo directamnete infoPaginaService
    //cargo aquí los productos para tenerlos a nivel global pero los podria poner tmb en el portafolio.component.ts
  }
}
