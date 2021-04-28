import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription} from 'rxjs';
import { map, retry, take, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy{

  public intervalSubs : Subscription;

  constructor() { 
    /* //se hace uso de la promesa
    this.getObservable().pipe(
      retry()
    )
    .subscribe( 
      res => console.log(`Respuesta del oberver ${res}`),
      err => console.error(err),
      () => console.info('Observer terminado')
    ); */

    this.intervalSubs= this.getIntervalo()
      .subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  getIntervalo() : Observable<number>{
    const invervalo$ = interval(500)
      .pipe(
        //take(10),
        map( (res) => {
          return res +1;
        }),
        //tiene que ser con esa estructura y no con un callback
        filter( (valor) => (valor % 2 == 0) ? true : false)
      )

    return invervalo$;
  }


  getObservable() : Observable<number>{
    let i = -1;
    //Se declara la promesa
    const obs$ = new Observable<number>( observer => {
      
      
      const intervalo = setInterval( () => {
        i++;
        observer.next(i);

        if(i == 4){
          clearInterval(intervalo);
          observer.complete();
        }

        if(i == 2){
          console.log('i = 2 = error');
          observer.error('i llego al valor de 2');
        }

      }, 1000);

    } );

    return obs$;
  }


}
