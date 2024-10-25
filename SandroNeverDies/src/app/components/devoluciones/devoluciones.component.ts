import { Component } from '@angular/core';

@Component({
  selector: 'app-devoluciones',
  templateUrl: './devoluciones.component.html',
  styleUrls: ['./devoluciones.component.css']
})
export class DevolucionesComponent {

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



