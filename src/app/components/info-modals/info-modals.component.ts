import { Component, OnInit } from '@angular/core';
import { ConexProductosService,Producto } from 'src/app/services/conexiones/conex-productos/conex-productos.service';
@Component({
  selector: 'app-info-modals',
  templateUrl: './info-modals.component.html',
  styleUrls: ['./info-modals.component.css']
})
export class InfoModalsComponent implements OnInit {

  cargar:any={  
    
    pk_id_producto:0,
    codigo_producto:'', 
    img:'', 
    nombre_producto:'', 
    descripcion:'',
    fk_marca:'',
    modelo:'',
    genero:'',
    talla:'',
    costo:'',
    oferta:'',
    fk_nombre_categoria:''
  };

  constructor(private ConexProdcutoService:ConexProductosService) { 

    this.ConexProdcutoService.disparadorDetalle.subscribe(data=>{
      this.ConexProdcutoService.getUnProducto(data).subscribe(
       res=>{
         console.log(res)         
         this.cargar=<any>res;               
       },
       err => console.log(this.cargar)
      );
    })
  }

  ngOnInit(): void {   
  }
}
