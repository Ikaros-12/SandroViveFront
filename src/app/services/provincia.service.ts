import { Injectable } from '@angular/core';

import { Provincia } from "src/app/models/provinciaModel";

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {
  provincia: Provincia[];

  constructor() { 
    this.provincia=[{
      "id": "1",
      "nombre": "",
      "capital": "",
      "descripcion": "",
      "imagen": ""
    }];
  }

  guardarProvincia(provinciaGuardar: Provincia[]) {
    //Recibe un array de usuarios y lo guarda. Sobreescribe el contenido previo.
    this.provincia = provinciaGuardar;
    //console.log(this.usuarios);
  }

  guardarProvinciasLocal() {
    //Guarda los usuarios del objeto en el LocalStorage
    localStorage.setItem("Provincia", JSON.stringify(this.provincia));
    //stringify convierte un texto en formato Json
  }

  cargarProvinciasLocal() {
    //Carga los usuarios desde el objeto en el LocalStorage
    this.provincia = JSON.parse(localStorage.getItem("Provincia") || '{}');
  }
}
