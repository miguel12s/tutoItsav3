import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { HorarioComponent } from "./horario/horario.component";
import { PerfilComponent } from "./perfil/perfil.component";

const routes:Routes=[
    
    { path: 'estudiante/perfil', component:PerfilComponent },
    { path: 'estudiante/horario', component: HorarioComponent}
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class EstudianteRouting{


}