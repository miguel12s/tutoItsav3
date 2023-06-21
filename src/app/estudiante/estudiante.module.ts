import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil/perfil.component';
import { HorarioComponent } from './horario/horario.component';
import { EstudianteRouting } from './estudiante-routing.module';
import { EstudianteComponent } from './estudiante.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';

@NgModule({
  declarations: [ 
    HorarioComponent, 
    PerfilComponent,
    EstudianteComponent
  ],
  imports: [
    CommonModule,
    EstudianteRouting,
    
  SharedModule
  ]
})
export class EstudianteModule { }
