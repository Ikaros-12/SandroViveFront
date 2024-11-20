import { Component } from '@angular/core';
import { InformesService } from 'src/app/services/informes.service';
import { ExportarExcelService } from 'src/app/services/exportar-excel.service'; // Asegúrate de usar la ruta correcta

@Component({
  selector: 'app-menoresventas',
  templateUrl: './menoresventas.component.html',
  styleUrls: ['./menoresventas.component.css']
})
export class MenoresventasComponent {
  
  filtro: any;
  menoresventas_por_periodo: any[];
  constructor(private informesService: InformesService, private exportarExcelService: ExportarExcelService){

    const fechaActual = new Date();
    const primerDiaDelMes = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 1);

    this.filtro = {
      // Asignar las fechas directamente formateadas usando el método toISOString
      fecha_desde: primerDiaDelMes.toISOString().split('T')[0], // Obtiene la fecha en formato YYYY-MM-DD
      fecha_hasta: fechaActual.toISOString().split('T')[0],     // Obtiene la fecha actual en formato YYYY-MM-DD
    };

    this.menoresventas_por_periodo = [];
  }

  ngOnInit(): void {
    this.MenoresVentasPorPeriodo();
  }

  MenoresVentasPorPeriodo(): void{    
    console.log(this.filtro);

    if (!this.filtro.fecha_desde || !this.filtro.fecha_hasta) {
      alert('Por favor, seleccione ambas fechas');
      return;
    }

    if (new Date(this.filtro.fecha_hasta) < new Date(this.filtro.fecha_desde)) {
      alert('La fecha "hasta" no puede ser anterior a la fecha "desde".');
      return;
    }

    if(this.filtro.fecha_desde && this.filtro.fecha_hasta){
      this.informesService.getMenoresVentasPorPeriodo(this.filtro.fecha_desde, this.filtro.fecha_hasta).subscribe({
        next: (response) => {
          this.menoresventas_por_periodo = response;
          // this.ventas_por_periodo = {
          //   fecha: response.fecha_creacion.toString(),
          //   pedido: response.pedido_id.toString(),
          //   cant_art: response.total_cantidad.toString(),
          //   monto_total: response.total.toString(),
          //   observaciones: response.observaciones.toString()
          // }
          console.log("Lista de Menores Ventas por Periodo:");
          console.log(this.menoresventas_por_periodo);
  
          // this.cantProductosCarrito = this.productosCarrito.length;
        }
      });
    }
  }

  ExportarExcel(): void {
    const headers = [
      { header: 'Nro Producto', key: 'pedido_id', width: 15 },
      { header: 'Nombre Producto', key: 'producto_nombre', width: 25 },
      { header: 'Total Vendido', key: 'total_vendido', width: 15 },
      { header: 'Monto total', key: 'total', width: 20 },
      { header: 'Observaciones', key: 'observaciones', width: 40 },
    ];

    const data = this.menoresventas_por_periodo.map(producto => ({
      pedido_id: producto.pedido_id,
      producto_nombre: producto.producto_nombre,
      total_vendido: producto.total_vendido,
      total: producto.total_vendido * 5000,
      observaciones: producto.observaciones,
    }));

    this.exportarExcelService.ExportarAExcel(data, headers, 'menores_ventas_por_periodo');
  }

}
