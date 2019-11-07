import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/Modelo/Empleado';
import { Mesa } from 'src/app/Modelo/Mesa';
import { async } from '@angular/core/testing';
import { APILinguiniServiceService } from 'src/app/services/apilinguini-service.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.page.html',
  styleUrls: ['./auth-login.page.scss'],
})
export class AuthLoginPage implements OnInit {


  empleados: Empleado[];
  mesas: Mesa[];
  selectedMesa: number;
  selectedEmpleado: number;
  mesaEncontrada: Mesa = { idMesa: 0, idEmpleado: 0, idEstado: 0, cantidadPersonas: 0};
  constructor(public alertController: AlertController, private service: APILinguiniServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getMeseros()
    .subscribe(data => {
      this.empleados = data;
    });

  this.service.getMesas()
    .subscribe(data => {
      this.mesas = data;
    });
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Éxito!',
      subHeader: 'Garzón y Mesa Registrados',
      message: 'Puede entregar el tablet al cliente..',
      buttons: ['OK']
    });

    await alert.present();
  }

  registrarMesa() {

    this.service.buscarMesa(this.selectedMesa).subscribe(data => {
    this.mesaEncontrada = data;

    });
    this.mesaEncontrada.idEstado = 6;
    this.mesaEncontrada.idEmpleado = this.selectedEmpleado;
    this.mesaEncontrada.idMesa = this.selectedMesa;
    this.mesaEncontrada.cantidadPersonas = this.mesaEncontrada.cantidadPersonas;
    localStorage.setItem('idMesa', this.mesaEncontrada.idMesa.toString());
    this.service.modificarMesa(this.mesaEncontrada)
    .subscribe(data => {
      this.mesaEncontrada = data;
      this.router.navigate(['./menu']);
      this.presentAlert();

    });
}
}
