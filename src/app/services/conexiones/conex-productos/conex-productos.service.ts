import { EventEmitter, Injectable, Output } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConexProductosService {
  @Output() disparadorDetalle: EventEmitter<any> = new EventEmitter();

  url='/producto';
  constructor(private http:HttpClient) { }
  
//sfadadgga holaaa //
  getProdcuto(){
    return this.http.get(this.url);
  };
//////que ondaaa///
  getUnProducto(id:number){
    return this.http.get(this.url+'/'+id)
  };
//dasaddefwew
  addProdcuto(producto:Producto){
    return this.http.post(this.url,producto);
  };
//sdadsadsa
  deletproducto(id:number){
    return this.http.delete(this.url+'/'+id);

  };
  //modificar
  editproducto(id:number, producto:Producto){
    return this.http.put(this.url+'/'+id,producto);

  };
  
}
export interface Producto{
  pk_id_producto:number;
  codigo_producto:string; 
  img:string; 
  nombre_producto:string; 
  descripcion:string; 
  fk_marca:number; 
  modelo:string;
  genero:string; 
  talla:string; 
  costo:string;
  oferta:string;
  fk_nombre_categoria:string;
};

