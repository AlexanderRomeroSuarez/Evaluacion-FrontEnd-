import { Injectable } from '@angular/core';
import { AngularFirestore } from 'src/app/cliente/cliente/node_modules/@angular/fire/firestore';
import { Cliente } from './cliente';
@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  formData: Cliente;

  constructor(private firestore: AngularFirestore) {}

  getEmployees() {
    return this.firestore.collection('employeessss').snapshotChanges();
  }
}
