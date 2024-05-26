import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from "src/app/models/usuarioModel";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  API_URI = 'http://localhost:3000/user';
  usuarios: Usuario[];

  constructor(/*private http: HttpClient*/) {
    this.usuarios = [{
      "id": "1",
      "nombre": "Pedro",
      "email": "pedro@email.net",
      "password": "123456",
      "rol": "admin"
    }, {
      "id": "2",
      "nombre": "Juan",
      "email": "juan@email.net",
      "password": "123456",
      "rol": "usuario"
    }, {
      "id": "3",
      "nombre": "Hugo",
      "email": "hugo@email.net",
      "password": "123456",
      "rol": "usuario"
    }, {
      "id": "4",
      "nombre": "Carlos",
      "email": "carlos@email.net",
      "password": "123456",
      "rol": "admin"
    }, {
      "id": "5",
      "nombre": "Maria",
      "email": "maria@email.net",
      "password": "123456",
      "rol": "admin"
    }];
  }

  listarUsuarios() {
    return this.usuarios;
  }

  guardarUsuarios(usuariosGuardar: Usuario[]) {
    //Recibe un array de usuarios y lo guarda. Sobreescribe el contenido previo.
    this.usuarios = usuariosGuardar;
    //console.log(this.usuarios);
  }

  guardarUsuariosLocal() {
    //Guarda los usuarios del objeto en el LocalStorage
    localStorage.setItem("Usuarios", JSON.stringify(this.usuarios));
    //stringify convierte un texto en formato Json
  }

  cargarUsuariosLocal() {
    //Carga los usuarios desde el objeto en el LocalStorage
    this.usuarios = JSON.parse(localStorage.getItem("Usuarios") || '{}');
  }

  setToken(rol :any) {
    //localStorage.setItem('token',result.token);
    localStorage.setItem('token', rol);
  }
 
  isLoggedIn(): Boolean {
    return !!localStorage.getItem('token'); //Si existe token retorna true
    //es el equivalente de testearlo con if pero ahora en una sola linea.
  }

  logOut() {
    localStorage.removeItem('token');
  }

  ingresarCuenta(_usuario:any, _password:any) : boolean{
    for (let usuario of this.usuarios) {
      if (usuario["nombre"] == _usuario && usuario["password"] == _password) {
        this.setToken(usuario["rol"]);
        return true;
      }

    }
    return false;
  }

}
