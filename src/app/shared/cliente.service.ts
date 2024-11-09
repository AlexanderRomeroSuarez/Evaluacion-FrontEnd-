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
<<<<<<< HEAD
    return this.firestore.collection('employeessss').snapshotChanges();
  }

  getEmployeesss() {
    return this.firestore.collection('employeId').snapshotChanges();
=======
    return this.firestore.collection('employeefusion').snapshotChanges();
>>>>>>> masterfusion
  }
}
