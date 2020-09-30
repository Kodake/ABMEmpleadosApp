import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  listEmpleado: Empleado[] = [
    {
      nombreCompleto: 'Luca',
      correo: 'lolxd@mail.com',
      estadoCivil: 'Soltero',
      fechaIngreso: new Date('2020-04-27'),
      sexo: 'Femenino',
      telefono: 1234567890,
    },
    {
      nombreCompleto: 'Wellington',
      correo: 'xdlol@mail.com',
      estadoCivil: 'Soltero',
      fechaIngreso: new Date('2020-04-27'),
      sexo: 'Masculino',
      telefono: 1234567890,
    }
  ];

  constructor() { }

  getEmpleados() {
    return this.listEmpleado.slice();
  }

  addEmpleado(empleado: Empleado) {
    this.listEmpleado.unshift(empleado);
  }

  getEmpleado(index: number) {
    return this.listEmpleado[index];
  }

  editEmpleado(empleado: Empleado, idEmpleado: number){
    this.listEmpleado[idEmpleado].nombreCompleto = empleado.nombreCompleto;
    this.listEmpleado[idEmpleado].correo = empleado.correo;
    this.listEmpleado[idEmpleado].fechaIngreso = empleado.fechaIngreso;
    this.listEmpleado[idEmpleado].telefono = empleado.telefono;
    this.listEmpleado[idEmpleado].sexo = empleado.sexo;
    this.listEmpleado[idEmpleado].estadoCivil = empleado.estadoCivil;
  }

  deleteEmpleado(index: number) {
    this.listEmpleado.splice(index, 1);
  }
}
