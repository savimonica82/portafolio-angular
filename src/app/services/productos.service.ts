import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando=true;
  productos: Producto[] = [];  //de esta manera digo que cada uno de los items que se encuentran dentro de "productos" es de tipo Producto[]

  constructor(private http: HttpClient) { 
    this.cargarProductos();
  }


  private cargarProductos(){
    this.http.get('https://angular-html-fffff-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json')
    .subscribe( (resp: Producto[])  =>{   
      this.productos = resp; 
      console.log(resp); 
    });

  //  setTimeout(() => {  //esto fue para ver el loading 
      this.cargando = false;
   // }, 2000);

  }


}
