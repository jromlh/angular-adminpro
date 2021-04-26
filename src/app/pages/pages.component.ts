import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

//para que typescript no se queje de la función 
//aunque si existe en modo global
declare function funcionDeInicio(); 

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  

  constructor(private settings_ : SettingsService) { }

  ngOnInit(): void {
    funcionDeInicio();
  }


  
}
