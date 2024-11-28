import { Injectable } from '@angular/core';
import { AngularFirestore } from 'src/app/cliente/cliente/node_modules/@angular/fire/firestore';
import { Cliente } from './cliente';
@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  formData: Cliente;

  constructor(private firestore: AngularFirestore) {}

  getEmployes() {
    return this.firestore.collection('employee').snapshotChanges();
  }
  getEmployeId() {
    return this.firestore.collection('employeeId').snapshotChanges();
  }

  getBusquedaId(string: any) {
    return this.firestore.collection('Id').snapshotChanges();
  }

  getShearchId(string: any) {
    return this.firestore.collection('cod').snapshotChanges();
  }


}
