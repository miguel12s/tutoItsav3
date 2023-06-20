import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'inicio', loadChildren: () => import('./pages/welcome/welcome.module').then(m=>m.WelcomeModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m=>m.LoginModule) },
  { path: 'registro', loadChildren: () => import('./pages/registro/registro.module').then(m=>m.RegistroModule) },
  {
    path:'',redirectTo:'inicio',pathMatch:'full'
  },
  {
    path:'**',redirectTo:'inicio',pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
