import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  lisyMenu : any[] = [
    {
      tittle : 'Menu',
      icon : 'mdi mdi-gauge',
      submenu : [
        {tittle : 'Main' , url : '/'},
        {tittle : 'Gráfica' , url : '/dashboard/grafica1'},
        {tittle : 'Progress bar' , url : '/dashboard/progress'},
      ]
    }
  ];

  constructor() { }
}
