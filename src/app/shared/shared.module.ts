import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { AppModule } from '../app.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EstudianteRouting } from '../estudiante/estudiante-routing.module';



@NgModule({
  declarations: [FooterComponent,HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,EstudianteRouting,
    
  ],
  exports:[
    FooterComponent,HeaderComponent,SidebarComponent
  ]
})
export class SharedModule { }
