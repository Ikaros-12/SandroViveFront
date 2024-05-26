import { Component } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  rol="visitar"
  constructor(private usuariosService:UsuariosService, private router:Router) { }

  logout(){
    /*Es de notar que el metodo logOut podria haberse hecho en un componente y mantener la sintaxis usuarios/salir pero nos vamos a ahorrar ese paso*/ 
      this.usuariosService.logOut();
    console.log("Cerrando sesion!!!");
    this.router.navigate(['usuarios/principal']);
    }
}
