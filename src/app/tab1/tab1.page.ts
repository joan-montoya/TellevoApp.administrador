import { Route } from '@angular/compiler/src/core';
import { Component, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PersonaService } from '../servicio/persona.service'
import { NavigationExtras, Router } from '@angular/router';
import { UsuarioService } from '../servicio/usuario.service';
import { LoginPage } from '../login/login.page'
import { Plugins } from "@capacitor/core";

const {Geolocation} = Plugins


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page { 
  currentCenter:any;
  coordinates:any[]=[];
  defaultZoom =14;
  @Input() usuarios:any
  @Input() reportes:any
    persona : any;
    usuario:any
    per:any
    rep:boolean
    aepellidos:null
    email:null
    password:null
//lat = 51.678418;
//lng = 7.809007;
    

  constructor(public personaService: PersonaService,public alertController: AlertController,public usuarioService: UsuarioService, public alert: AlertController, public router: Router) {
    this.rep=false;
  } 
  ngOnInit() {
    this.obtenerAlertas()
    this.watchPosition();
   this.getCurrentPosition();
  }
  ionViewDidEnter(){
    this.watchPosition();
   this.getCurrentPosition();
  }
  async alerta(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Entendido',
      message: 'Peticion de viaje',
      buttons: ['OK']
    });
    await alert.present();
  
  }
  
  
  
  obtenerAlertas() {
    this.usuarioService.obtenerAlertas().then((data: any) =>{
      this.reportes=data.alertas;
      console.log("Codigo",this.reportes);
      console.log();
    }).catch((err) =>{
      console.log(err);
    })
  }
  logout(){
    this.personaService.logout()
    this.personaService.adminot()
    this.router.navigate(['/'])
  }
  report(){
    this.rep=true;
  }
  report2(){
    this.rep=false;
  }
  
  async getCurrentPosition(){
    const coordinates = await Geolocation.getCurrentPosition();
    this.currentCenter = {
      lat: coordinates.coords.latitude,
      long: coordinates.coords.longitude
    }
  }
  
  watchPosition(){
    Geolocation.watchPosition({}, position=>{
      this.currentCenter = {
        lat: position.coords.latitude,
        long: position.coords.longitude
      };
      this.coordinates.push ({
        lat: position.coords.latitude,
        long: position.coords.longitude
      });
    });
  }
}
