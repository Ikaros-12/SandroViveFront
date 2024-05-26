import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuarioModel';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios-ingresar',
  templateUrl: './usuarios-ingresar.component.html',
  styleUrls: ['./usuarios-ingresar.component.css']
})
export class UsuariosIngresarComponent implements OnInit {
  //usuarios:Usuario[];
  id_select:string="0";
  indice:number=0;
  nuevo:Usuario={};
  nuevo_auxiliar: Usuario = {};

  errorNombre=0;
  errorPassword=0;
  errorRol=0;
  errorEmail=0;
  error=false;

  iniciarsesion(){
    /*if (this.usuariosService.verificarusuarios(this.nuevo.nombre,this.nuevo.password)){
      this.router.navigate(['usuarios/home']);
    }else{
      this.error=true;
    }*/
  } 
 
  constructor(private usuariosService:UsuariosService,private router: Router,private route: ActivatedRoute) {
  //constructor(private usuariosService:UsuariosService, router: Router, route: ActivatedRoute) {  
    //this.usuariosService.cargarUsuariosLocal(); //forzamos el uso de la carga local a modo de prueba.
    //this.usuarios = this.usuariosService.listarUsuarios();
    //console.log("Usuarios listar");
    //console.log(this.usuarios);
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  /*
  actualizar(){
    console.log("Elige: " + this.id_select)
    console.log(this.usuarios)
    console.log(this.nuevo_auxiliar);
    Object.assign(this.nuevo_auxiliar,this.usuarios[this.indice]);
    this.usuariosService.guardarUsuarios(this.usuarios);
    this.usuariosService.guardarUsuariosLocal();
  }

  seleccionaValor($event:any){
    console.log("Elige: " + this.id_select)
    
    for(let i=0;i<this.usuarios.length;i++){
      if(this.id_select==this.usuarios[i].id){
        this.indice=i;
        break;
      }
    }
	console.log(this.indice);
  console.log(this.nuevo_auxiliar);
  Object.assign(this.nuevo_auxiliar,this.usuarios[this.indice]);
// copia campo por cambpo el objeto seleccionado en el auxiliar
  }



  eliminar($event:any){
    console.log($event.target.value);
    let id:string = $event.target.value; //Guardamos el id del boton
    for (let i = 0; i < this.usuarios.length; i++) { //recorremos el array.
      if (this.usuarios[i].id == id) {//buscamos coincidencia de id.
        this.usuarios.splice(i, 1);//Cuando encuentra, elimina y sale del ciclo.
        break;
      }
    }
    console.log(this.usuarios);//imprime en consola el objeto resultante
	//this.usuariosService.guardarUsuarios(this.usuarios);
    //this.usuariosService.guardarUsuariosLocal();
  }*/
  validarCampos():Boolean{
    console.log("Validando los campos del formulario!!!");
    this.errorNombre=this.verificarNombre(this.nuevo.nombre);
    this.errorPassword=this.verificarPassword(this.nuevo.password);
    this.errorRol=this.verificarRol(this.nuevo.rol);
    this.errorEmail=this.verificarEmail(this.nuevo.email);
    if(  (this.errorNombre+this.errorPassword+this.errorRol+this.errorEmail)>0){
      return false;
    }
    return true;

  }

  private verificarNombre(nombre: any): number {
    const patron = /^[A-Z][A-z,a-z\s]+$/; //Primer caracter en mayusculas alternando luego
    if (nombre === undefined)
      return 1;
    if (nombre.length > 20)
      return 2;
    if (!patron.test(nombre))
      return 3;
    return 0;
  }

  private verificarPassword(password: any): number {
    const patron = /^[A-Za-z0-9@]{5,20}$/; //mayus, minus, digitos y @ entre 5 y 20
    if (password === undefined)
      return 1;
    if (password.length > 20)
      return 2;
    if (!patron.test(password))
      return 3;
    return 0;
  }

  private verificarRol(rol: any): number {
    const patron = /^user$|^admin$/g; //exactamente user o admin
    if(patron === undefined)
      return 2;
    if (!patron.test(rol))
      return 1;
    return 0;
  }

  private verificarEmail(email: any): number {
    const patron = /^[a-z0-9]{1,10}@[a-z0-9]{1,10}.[a-z]{2,3}$/;// email: alfanum @ alfanum . alfab
    if (email=== undefined)
      return 1;
    if (email.length > 20)
      return 2;
    if (!patron.test(email))
      return 3;
    return 0;
  }

  limpiarNombre() {
    if (this.errorNombre > 0) {
      console.log("Limpiar nombre");
      this.nuevo.nombre = "";
      this.errorNombre = 0;
    }
  }

  limpiarPassword() {
    if (this.errorPassword > 0) {
      console.log("Limpiar password");
      this.nuevo.password = "";
      this.errorPassword = 0;
    }
  }

  limpiarRol() {
    if (this.errorRol > 0) {
      console.log("Limpiar rol");
      this.nuevo.rol = "";
      this.errorRol = 0;
    }

  }

  limpiarEmail() {
    if(this.errorEmail>0){
      console.log("Limpiar email");
      this.nuevo.email = "";
      this.errorEmail = 0;
    }
  }

  reset(){
    this.nuevo.nombre="";
    this.nuevo.password="";
    this.error=false;
  }

}
