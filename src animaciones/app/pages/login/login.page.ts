import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mdl_user:string='';

  constructor(private animationCtrl: AnimationController,
    private router:Router) { }

  ngOnInit() {

  /*  this.animationCtrl.create()
  .addElement(document.querySelector('.animado'))
  .duration(3000)
  .iterations(Infinity)
  .fromTo('transform', 'translatex(0px)', 'translatey(100px)')
  .fromTo('opacity', '1', '0').play();
  }*/
  const squareB = this.animationCtrl.create()
  .addElement(document.querySelector('.animado'))
  .keyframes([
    { offset: 0, transform: 'scale(1))', opacity: '1' },
    { offset: 0.25, transform: 'scale(1.5)', opacity: '0.5' },
    { offset: 0.5, transform: 'scale(2)', opacity: '0.3' },
    { offset: 0.75, transform: 'scale(1.5)', opacity: '0.3' },
    { offset: 1, transform: 'scale(1)', opacity: '1' }
  ]);

  const parent = this.animationCtrl.create()
  .duration(5000)
  .iterations(Infinity)
  .addAnimation([ squareB,]).play();

}
navegar(){

  let parametros: NavigationExtras = {
    state:  {
      usuario: this.mdl_user,
      cualquierCosa: 'un valor cualquiera'
    }
  }

  this.router.navigate(['principal'],parametros);
 }
}