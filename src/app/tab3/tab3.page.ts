import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { AlertController } from '@ionic/angular';
import { PersonaService } from '../servicio/persona.service'
import { UsuarioService } from '../servicio/usuario.service'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  @Input() usuarios: any 
  @Input() viajes: any 
  @Input() conductores: any 
  pasaj:boolean
  condu:boolean
  viaje:boolean
 
  constructor(public usuarioService: UsuarioService,public personaService: PersonaService, public router: Router) {
    this.pasaj=false
    this.condu=false
    this.viaje=false
  }
  logout(){
    this.personaService.logout()
    this.personaService.adminot()
    this.router.navigate(['/'])
  }
  ngOnInit() {
    //this.obtenerUsuarios();
    //this.obtenerConductores();
    //this.obtenerPasajeros();
  }
  obtenerPasajeros() {
    this.usuarioService.obtenerPasajeros().then((data: any) =>{
      this.usuarios=data.usuarios;
      console.log("usuario",this.usuarios);
    }).catch((err) =>{
      console.log(err);
    })
  }
  obtenerViajes() {
    this.usuarioService.obtenerViajes().then((data: any) =>{
      this.viajes=data.productos;
      console.log("usuario",this.viajes);
    }).catch((err) =>{
      console.log(err);
    })
  }
  obtenerConductores() {
    this.usuarioService.obtenerConductores().then((data: any) =>{
      this.conductores=data.usuarios;
      console.log("conductor",this.conductores);
    }).catch((err) =>{
      console.log(err);
    })
  }
  borrarUsuario(_id: string){
    this.usuarioService.borrarUsuario(_id).then((data: any) =>{
      console.log(data);
      location.reload(true);
    }).catch((err) =>{
      console.log(err);
    })
  }
  borrarConductor(_id: string){
    this.usuarioService.borrarConductor(_id).then((data: any) =>{
      console.log(data);
      location.reload(true);
    }).catch((err) =>{
      console.log(err);
    })
  }
  pason(){
    this.pasaj=true;
  }
  pasoff(){
    this.pasaj=false;
  }
  conon(){
    this.condu=true;
  }
  conoff(){
    this.condu=false;
  }
  actviaj(){
    this.viaje=true;
  }
  desviaj(){
    this.viaje=false;
  }

}
