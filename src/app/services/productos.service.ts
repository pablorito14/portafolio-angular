import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando:boolean = true;
  productos:any = [];
  productosFiltrado:Producto[] = [];

  constructor( private http:HttpClient ) {
    this.cargarProductos();  
  }

  private cargarProductos(){
    return new Promise<void>( (resolve,reject) => {
      this.http.get('https://angular-html-7f46c-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe( (resp: Producto) => {
          this.productos = resp;
          this.cargando = false;
          resolve();
        } );
    } );
    

    
  }
  getProducto(id:string){
    // https://angular-html-7f46c-default-rtdb.firebaseio.com/productos/prod-14.json
    return this.http.get(`https://angular-html-7f46c-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino:string){
    if(this.productos.length === 0){
      this.cargarProductos().then( () => {
        // se ejecuta despues de terminar de cargar
        this.filtrarProductos(termino);
      })
    } else {
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino:string){
    
    this.productosFiltrado = [];

    termino = termino.toLowerCase();

    this.productos.forEach((prod: any) => {
      const tituloLower = prod.titulo.toLocaleLowerCase();

      if(prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
        this.productosFiltrado.push(prod);
      }
    });
  }
  
}
