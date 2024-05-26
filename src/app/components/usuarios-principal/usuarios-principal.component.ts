import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios-principal',
  templateUrl: './usuarios-principal.component.html',
  styleUrls: ['./usuarios-principal.component.css']
})
export class UsuariosPrincipalComponent implements OnInit {

  redirect(){

    this.router.navigate(['usuarios/ingresar']);

  }

  constructor(private router: Router, private route: ActivatedRoute)
  {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
