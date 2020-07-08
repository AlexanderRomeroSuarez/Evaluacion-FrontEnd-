import { Component, OnInit } from '@angular/core';

import { ClienteService } from 'src/app/shared/cliente.service';
import { Cliente } from 'src/app/shared/cliente';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  list: Cliente[];
  constructor(private service: ClienteService) {}

  ngOnInit() {
    this.service.getEmployees().subscribe((actionArray) => {
      this.list = actionArray.map((item) => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data(),
        } as Cliente;
      });
    });
  }

  onEdit(emp: Cliente) {
    this.service.formData = Object.assign({}, emp);
  }
}
