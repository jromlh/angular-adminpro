import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public link = document.querySelector('#theme');

  constructor() {
    this.cargarTema();
  }

  cargarTema(){
    let url : string;
    if (localStorage.getItem('Theme') != '') {
      url = localStorage.getItem('Theme');
    }
    else{
      url = "./assets/css/colors/default-dark.css";
    }
    this.link.setAttribute('href',url);
  }

  changeTheme(theme : string){
    const url = `http://localhost:4200/assets/css/colors/${theme}.css`;

    this.link.setAttribute('href',url);

    localStorage.setItem('Theme', url);

    this.checkTheme();
  }

  checkTheme() {
    const links = document.querySelectorAll('.selector');

    links.forEach( element => {
      element.classList.remove('working');

      const theme = element.getAttribute('data-theme');
      //console.log(theme);

      const element_link = `http://localhost:4200/assets/css/colors/${theme}.css`;
      const theme_actual = this.link.getAttribute('href');

      if(element_link === theme_actual){
        element.classList.add('working');
      }
    });
  }
}
