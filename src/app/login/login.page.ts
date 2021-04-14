import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PersonaService } from '../servicio/persona.service'
import { UsuarioService } from '../servicio/usuario.service'
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @Input() usuarios: any 
  @Input() admin: any 
  usuario: string;
  _id:string;
  usuari:Array<any>
  password: string;
  persona: any;
  usua:any;
  log:boolean;
  person={
    nombre:null,
    aepellidos:null,
    email:null,
    password:null,
  }
  

  constructor(public personaService: PersonaService,public usuarioService: UsuarioService, public alert: AlertController, public router: Router,public alertController: AlertController) { 
    this.log=false;
   } 
  obtenerUsuarios() {
    this.usuarioService.obtenerUsuarios().then((data: any) =>{
      console.log(data.usuarios);
      this.usuarios=data.usuarios;
      console.log("Codigo",this.usuarios);
      console.log();
    }).catch((err) =>{
      console.log(err);
    })
  }
  seleccionar(idUsuario: string){​​
    this.usuarioService.seleccionar(idUsuario).then((data: any) => {​​
    this.admin = data.usuarios;
    console.log("Seleccion",this.admin);
    }​​).catch((err) => {​​

    console.log(err);

    }​​);

  }​​
  registrarUsuario(){
    console.log(this.person); 
    this.usuarioService.registrarUsuario(this.person).then((data: any) =>{
      location.reload(true);
    }).catch((err) =>{
      //console.log(err);
        })
  }
  ngOnInit() {
    this.obtenerUsuarios();
  }

  async login(){
    for(let x = 0; x < this.usuarios.length; x++){
      if(this.usuario == this.usuarios[x].email && this.password == this.usuarios[x].password){
        console.log(this.usuarios.email);
        console.log(this.usuario);
        //Las credenciales son correctas
        this.personaService.admia()
       this.log=true
      }
    }

    if(this.log == true){
      this.personaService.login
       this.router.navigate(['/tabs/tab1'])
    }else{
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'ERROR',
        message: 'LAS CREDENCIALES SON INCORRECTAS',
        buttons: ['OK']
      });
      await alert.present();
    }
    this.log=false;
  }
  
  logout(){
    this.personaService.logout()
   if(this.personaService.loeo == false){
    this.router.navigate(['/'])
    this.personaService.adminot()
   } 
  }

}
