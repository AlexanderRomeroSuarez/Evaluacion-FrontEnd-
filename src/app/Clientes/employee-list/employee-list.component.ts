import { Component, OnInit } from '@angular/core';

import { ClienteService } from 'src/app/shared/cliente.service';
import { Cliente } from 'src/app/shared/cliente';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  listando: Cliente[];
  constructor(private service: ClienteService) {}

  ngOnInit() {
    this.service.getEmployees().subscribe((actionArray) => {
      this.listando = actionArray.map((item) => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data(),
        } as Cliente;
      });
    });
  }

  onEditar(emp: Cliente) {
    this.service.formData = Object.assign({}, emp);
  }
}
