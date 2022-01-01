import { Component, OnInit } from '@angular/core';
import { InfoPagina } from '../../interfaces/info-pagina.interface';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public  _servicio: InfoPaginaService,
              private router: Router) //el router lo necesito para hacer la navegación interna (redireccion despues dela busqueda)
    {//importo el servicio para poder utilizarlo en el header, por ejemplo {{_servicio.info.titulo}}


   }

  ngOnInit(): void {
  }

  buscarProducto(termino:string){
    if(termino.length<1){
      return;//no hace nada
    }

    this.router.navigate(['/search', termino]);
    //console.log(termino);
  }

}
