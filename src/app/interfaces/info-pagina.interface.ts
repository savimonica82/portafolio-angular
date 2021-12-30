

export interface InfoPagina {

    //voy a copiar todo el JSON , luego CTRL+SHIFT+P  busco la extensión JSON to TS clibboard, me lo transforma en automatico para no escribirlo todo manualmente!! 
    titulo?: string;   //el ?  es opcional pero mejor ponerlo para evitar errores
    email?: string; 
    nombre_corto?: string;
    comments?: string;
    pagina_autor?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    pinterest?: string;
    tumblr?: string;
    equipo_trabajo?: any[];
}