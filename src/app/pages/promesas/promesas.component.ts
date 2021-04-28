import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios()
      .then( usuarios => console.log(usuarios));

    /* const promesa = new Promise( (resolve, reject) => {
      if(false){
        resolve('Funcionó la promesa');
      }else{
        reject('No funcionó la promesa');
      }
    });

    promesa.then( (mensaje) =>{
      console.log(mensaje);
    })
    .catch((err) => {
      console.log(err);
    });

    console.log('Fin del Init'); */

  }

  getUsuarios(){

    const promesa = new Promise(resolve => {
      
      fetch('https://reqres.in/api/users?')
        .then( resp => resp.json() )
          //Hasta aquí le mandamos solo la data de los usuarios y no toda la información de antes
          .then(body => resolve(body.data)); 

    });

    return promesa
    
  }
}
