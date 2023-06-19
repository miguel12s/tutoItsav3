import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'',redirectTo:'/inicio',pathMatch:'full'},
  { path: 'inicio', loadChildren: () => import('./pages/pages.module').then(m=>m.PagesModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
