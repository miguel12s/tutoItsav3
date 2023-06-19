import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavbarServices } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  
  public rutas:string[]=['/login','/registro']
  private navbarService=inject(NavbarServices)

public showNavbar=this.navbarService.serviceNavbar(false)
private router=inject(Router)
ngOnInit(): void {
  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      // Verificar la ruta actual y ocultar el navbar si es necesario
      this.showNavbar=  !this.rutas.includes(event.url)
    
    }
    })
}
 

}
