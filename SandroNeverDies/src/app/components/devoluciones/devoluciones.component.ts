import { Component } from '@angular/core';

@Component({
  selector: 'app-devoluciones',
  templateUrl: './devoluciones.component.html',
  styleUrls: ['./devoluciones.component.css']
})
export class DevolucionesComponent {

   /* // Propiedades para vincular con [(ngModel)]
   pedido: string = '';
   producto: string = '';
   motivo: string = '';
 
   // Arreglos de opciones
   pedidos: string[] = ['Pedido 1', 'Pedido 2', 'Pedido 3'];
   productos: string[] = ['Producto A', 'Producto B', 'Producto C'];
   motivos: string[] = ['Motivo 1', 'Motivo 2', 'Motivo 3'];
 
   // Constructor
   constructor() { } */

   // Variables para almacenar los valores de los campos
   nombre: string = '';
   telefono: string = '';
   email: string = '';
   codigoProducto: string = '';
   mensaje: string = '';
 
   // Función para limpiar los campos del formulario
   limpiarCampos(form: any) {
     form.resetForm(); // Limpiar los campos vinculados con ngModel
     console.log('Formulario limpiado');
   }

}



