import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//para utilizar  private http: HttpClient
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root' //con esto no hace falta añadir service in provider in app.module ni importarlo porqué lo estoy haciendo aquí
}) //con root le estoy diciendo en que nivel lo quiero incluir/inyectar
export class InfoPaginaService {   //voy a poner InfoPaginaService en app.component.ts para llamarlo

  //info: any = {}; //lo cambio por la interfaz que he creado
  info: InfoPagina  = {};
  cargada = false;

  equipo: any[] = [];

  constructor(private http: HttpClient) { //con este servicio puedo realizar peticione a servidores externos
    //de momento lo utilizo para leer el data-json que tengo aquí
    //console.log("servicio de info pagina listo");
   // this.http.get('assets/data/data-pagina.json')//esta es la definicion de donde se encuentra pero no la va a ejecutar
    //la voya ajecutar con el subscribe
      //  .subscribe( (resp: InfoPagina) =>{
        //  this.cargada = true;
        //  this.info = resp;
          //en resp tendré un objeto de javascript, NO un JSON
        //  console.log(resp);  //cuando se dispare el constructor del InfoPaginaService, se verá esto
        //  console.log(resp['email']);
       // });


       /////////TODO ESTO LO HE COMENTADO PORQUE LO PUSE DENTRO DE LA FUNCTION cargarInfo
       this.cargarInfo();
       this.cargarEquipo();
  }

  private cargarInfo(){


    this.http.get('assets/data/data-pagina.json')//esta es la definicion de donde se encuentra pero no la va a ejecutar
    //la voya ajecutar con el subscribe
        .subscribe( (resp: InfoPagina) =>{
          this.cargada = true;
          this.info = resp;
          //en resp tendré un objeto de javascript, NO un JSON
        //  console.log(resp);  //cuando se dispare el constructor del InfoPaginaService, se verá esto
        //  console.log(resp['email']);
        });



  }

  
  private cargarEquipo(){



    this.http.get('https://angular-html-fffff-default-rtdb.europe-west1.firebasedatabase.app/equipo.json') 
        .subscribe( (resp: any[])  =>{  //en este caso  le digo tipo any porque no sé lo que recibo
          this.equipo = resp; 
         // console.log(resp); 
        });



  }
}
