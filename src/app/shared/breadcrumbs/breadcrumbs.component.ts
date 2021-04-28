import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit,OnDestroy {

  page_title : string;
  obsData$ : Subscription;

  constructor( private router_ : Router ) {
    
    this.obsData$= this.getRouterData().subscribe( ({title}) => {
      this.page_title = title;
      document.title = `AdminPro - ${title}`
    });

  }
  ngOnDestroy(): void {
    this.obsData$.unsubscribe();
  }

  ngOnInit(): void {
  }

  getRouterData(){
    return this.router_.events
      .pipe(
        filter(event => event instanceof ActivationEnd),
        filter((event : ActivationEnd) => event.snapshot.firstChild == null),
        map( (event : ActivationEnd) => event.snapshot.data)
      );
  }
}
