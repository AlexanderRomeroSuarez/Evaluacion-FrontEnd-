import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ejemplo de FronEnd';

  suma(a, b){
   return a + b ;
  }
  
  suma(a, b){
    return a + b ;
   }
}
