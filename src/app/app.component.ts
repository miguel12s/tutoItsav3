import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { NavigationEnd, Router } from '@angular/router';
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tutoriasItsa';
  data=""
  public showNavbar=true
  viewDate: Date = new Date();
  events: CalendarEvent[] = [
    {
      title: 'Event 1',
      start: new Date(),
      end: new Date(),
    },
    {
      title: 'Event 2',
      start: new Date(),
      end: new Date(),
    },
    // Agrega más eventos si lo deseas
  ];



  public rutas:string[]=['/login','/registro']

constructor(private readonly httpClient:HttpClient,private api:ApiService,private router:Router){}



  ngOnInit(): void {
  
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Verificar la ruta actual y ocultar el navbar si es necesario
        this.showNavbar=  !this.rutas.includes(event.url)
      
      }
      })


  }
  dayClicked(day: CalendarMonthViewDay): void {
    console.log(day);
    // Aquí puedes realizar acciones cuando se hace clic en un día del calendario
  }
  eventToRedirect():void{
alert('hola')


  }



}
