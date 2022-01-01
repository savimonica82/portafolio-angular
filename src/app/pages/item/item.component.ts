import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../interfaces/producto.interface';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  //producto: ProductoDescripcion = {}; //si lo haces así tienes que dejar todo opcional en el interfaz uytilizando el ?
  producto: ProductoDescripcion; //si lo haces así tendré undefined cusando utilizo ,por ejemplo producto.titulo entonces tengo que poner  this.producto = producto; abajo dentro del subscribe
  id: string; //lo necesito para buscar las carpetas de imagenes! y luego añado  this.id = parametros['id']; en el subscribe abajo

  constructor( private route: ActivatedRoute, 
              public ProductosService: ProductosService ) { }

  ngOnInit(): void {
    this.route.params.subscribe( parametros =>{
     // console.log(parametros);//si voy en http://localhost:4200/#/item/prod-4 obtengo {id: 'prod-4'}  (id porque puse la variable id en routing {path: 'item/:id'......)
     // console.log(parametros.id);//si quiero solo el ID  , por ejemplo prod-4
      this.ProductosService.getProducto(parametros['id'])
      .subscribe((producto: ProductoDescripcion) =>{
        //console.log(producto);
        this.id = parametros['id'];
        this.producto = producto;

      });
    }) //el subscribe está pendiente de todos los cambios que recibo en la url
  }

}
