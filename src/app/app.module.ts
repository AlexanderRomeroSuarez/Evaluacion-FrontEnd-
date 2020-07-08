import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from '../app/Clientes/clientes.component';
import { EmployeeListComponent } from './Clientes/employee-list/employee-list.component';

@NgModule({
  declarations: [AppComponent, ClientesComponent, EmployeeListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
