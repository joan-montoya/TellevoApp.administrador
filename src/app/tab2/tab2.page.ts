import { Route } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UsuarioService } from '../servicio/usuario.service'
import { PersonaService } from '../servicio/persona.service'


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
persona : any;
cond={
  nombre:null,
  apellidos:null,
  email:null,
  password:null,
  direccion:null,
  curp:null,
  marca:null,
  placa:null,
  modelo:null,
}
person={
  nombre:null,
  apellidos:null,
  email:null,
  password:null,
  direccion:null,
  curp:null
}
condu:boolean;
perso:boolean;

constructor(public usuarioService: UsuarioService,public personaService: PersonaService, public alert: AlertController, public router: Router) {
  this.condu=false;
  this.perso=false;
}

registrarConductor(){
  console.log(this.cond); 
  this.usuarioService.registrarConductor(this.cond).then((data: any) =>{
  }).catch((err) =>{
    //console.log(err);
      })
}
registrarUsuario(){
  console.log(this.person); 
  this.usuarioService.registrarUsuario(this.person).then((data: any) =>{
  }).catch((err) =>{
    //console.log(err);
      })
}

async agregarAlert() {
  const alert = await this.alert.create({
    cssClass: 'my-custom-class',
    header: 'Exito',
    subHeader: 'Se añadio el usuario',
    buttons: ['OK']
  });
await alert.present();
}

  
logout(){
  this.personaService.logout()
  this.personaService.adminot()
  this.router.navigate(['/'])
}
actcond(){
  this.condu=true;
}
descond(){
  this.condu=false;
}
actper(){
  this.perso=true;
}
desper(){
  this.perso=false;
}
}