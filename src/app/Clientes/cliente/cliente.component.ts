import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/shared/cliente.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent implements OnInit {
  constructor(
    private service: ClienteService,
    private firestore: AngularFirestore,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.service.formData = {
      id: null,
      Nombre: '',
      Apellido: '',
      Edad: '',
      FechaNacimiento: '',
    };
  }

  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null) this.firestore.collection('clientes-1').add(data);
    else this.firestore.doc('cliente/' + form.value.id).add(data);
    this.resetForm(form);
    this.toastr.success('Se ha registrado correctamente un cliente');
  }
}
