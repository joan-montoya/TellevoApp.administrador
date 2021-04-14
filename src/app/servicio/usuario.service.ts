import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  obtenerUsuarios() {
    return this.http.get(`${this.url}/administrador`).toPromise();
    }
    obtenerPasajeros() {
      return this.http.get(`${this.url}/usuario`).toPromise();
      }
      obtenerConductores() {
        return this.http.get(`${this.url}/conductor`).toPromise();
        }
        obtenerViajes() {
          return this.http.get(`${this.url}/viaje`).toPromise();
          }
          obtenerAlertas() {
            return this.http.get(`${this.url}/alerta`).toPromise();
            }

    seleccionar(_id: string){​​
      return this.http.get(`${this.url}/administrador/${_id}`).toPromise();
    }​​
    registrarUsuario(usuario: any) {
      console.log(usuario);
      return this.http.post(`${this.url}/usuario`, usuario).toPromise();
    }
    registrarConductor(usuario: any) {
      console.log(usuario);
      return this.http.post(`${this.url}/conductor`, usuario).toPromise();
    }
    borrarUsuario(_id: string) {
      console.log(_id)
      return this.http.delete(`${this.url}/usuario/${_id}`).toPromise();
    }
    borrarConductor(_id: string) {
      console.log(_id)
      return this.http.delete(`${this.url}/conductor/${_id}`).toPromise();
    }
}
