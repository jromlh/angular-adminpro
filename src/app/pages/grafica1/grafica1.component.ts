import { Component } from '@angular/core';




@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: []
})

export class Grafica1Component{

  labels1 : string[] = ['Producto 1', 'Producto 2', 'Producto 3'];
  data1 : number[] = [35, 15, 50];
  

  labels2 : string[] = ['Cosa 1', 'Cosa 2', 'Cosa 3'];
  data2 : number[] = [33, 33, 34];
  

  
}
