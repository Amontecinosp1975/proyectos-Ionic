import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';


@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private router: Router, private sqlite: SQLite) {
    this.sqlite.create({
      name: 'datos.db',
      location: 'default'
    }).then((db: SQLiteObject)=> {
      db.executeSql('CREATE IF NOT EXIST USUARIO (MAIL VARCHAR (75), CONTRASENA VARCHAR (30))',[]).then
      (() => {
        console.log('TABLA CREADA OK')
      }).catch(e => {
        console.log('TABLE NOK')
      })

    }).catch(e => {
      console.log('BASE DE DATOS NOK');
    })

    

  }

  canActivate() {
    this.router.navigate(['inicio']);
    return false; 

  }

}