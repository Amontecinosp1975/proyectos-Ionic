import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/service/db.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  modeloUsuario: string = '';
  modeloContrasena: string = '';


  constructor(private dbService: DbService ) { 
    console.log('Pagina login Iniciada');
  }

  ngOnInit() {
  }

  validarCredenciales() {
    console.log(this.modeloUsuario);
    console.log(this.modeloContrasena);
  }
  
}