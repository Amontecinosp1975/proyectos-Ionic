import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mdl_user: string = '';
  mdl_pass: string = '';
  db: any;

  constructor(private router: Router,
    private alertController: AlertController) { }

  ngOnInit() {
  }

  ingresar() {
    this.db.validarCredenciales()


    if (this.mdl_user == "admin" && this.mdl_pass == "admin") {
      this.router.navigate(['principal']);
    }
  }

}
