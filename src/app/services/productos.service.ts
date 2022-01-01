import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando=true;
  productos: Producto[] = [];  //de esta manera digo que cada uno de los items que se encuentran dentro de "productos" es de tipo Producto[]
//cuando tengo el termino de la busqueda lo podrí buscar en productos
  productosFiltrado: Producto[] = [];  


  constructor(private http: HttpClient) { 
    this.cargarProductos();
  }


  private cargarProductos(){

    //trabajo con promesas  :cierro la peticion asincrona dentro de esta promisa:  este codigo sirve para que la pagina search no se cargue vacia la primera vez
    // necesito ejecutar cierto codigo hasta que este se resuelva
    return new Promise<void>((resolve,reject)=>{
 
              //petición asincrona: 
              this.http.get('https://angular-html-fffff-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json') 
              .subscribe( (resp: Producto[])  =>{   
                this.productos = resp; 
                this.cargando = false;
                resolve();//llamo el resolve para indicar que la promesa terminó exitosamente
                //console.log(resp); 
              }); 
    });


  //  setTimeout(() => {  //esto fue para ver el loading 
     // this.cargando = false;
   // }, 2000); 
  }

  getProducto (id:string){
   return this.http.get(`https://angular-html-fffff-default-rtdb.europe-west1.firebasedatabase.app/productos/${id}.json`) //este es un observable  /////para insertar una variable aquí tengo que utilizar las comillas al revés
  }
  buscarProducto(termino:string){

    //ejecutar el filtro solo y unicamente cuando existen datos
    if(this.productos.length === 0){
      //cargar productos
      this.cargarProductos().then( ()=>{
        //se ejecuta despues de tener los productos
        //aplicar filtros
        this.filtrarProductos(termino);
      })
    }else{
      //aplicar el filtro 
        this.filtrarProductos(termino);
    }

     //esto lo puedo comentar porque lo llamo en la condicion de arriba con la funcion filtrar, auqnue en filtrar lo voy hacer un poquito diferente
      //  this.productosFiltrado = this.productos.filter(producto =>{
        //  return true; 
       // }); //con filter barra todos los elementos uno por uno y no hay ninguna condicion , todo lo va a regresar
      //  console.log(this.productosFiltrado);
  }

  private filtrarProductos(termino:string){
    //console.log(this.productos);
    this.productosFiltrado = [];//vacio el arreglo antes de buscar otra vez, que si no se van añadiendo con una nueva busqueda
    //javascript suele ser case sensitive, entonces hago esto antes de buscarlo
    termino = termino.toLowerCase();

    this.productos.forEach(prod=>{//esta vez utilizo el foreach en luigar de .filter  (ver lineas comentadas arriba)
      const tituloLower = prod.titulo.toLowerCase();
      if(prod.categoria.indexOf(termino) >=0 || tituloLower.indexOf(termino) >=0){//indexOf = si en categoria contiene algo del termino (no tiene porque ser igual)
        this.productosFiltrado.push(prod);
      }
    });
    
  }

}
