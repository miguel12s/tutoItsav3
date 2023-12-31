import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
contactForm!:FormGroup
showAlert=false
submitted=false
constructor(public fb:FormBuilder,private router:Router){

  this.contactForm=fb.group({
    email:['',[Validators.email,Validators.required]],
    password:['',[Validators.required,Validators.min(6)]]
  })

}
validarInput() {
  if (!this.contactForm.get('email')?.invalid) {
    this.showAlert = false;
  } else {
    this.showAlert = true;
  }

}

onSubmit(form:any):void{
  let email="miguel@unibarranquilla.edu.co"
  let password="1234567"
  this.submitted=true
console.log(form);

  if(this.contactForm.invalid){
    return 
  }
  if(email==form.email && password==form.password ){
    this.router.navigate(['/estudiante'])
  }
  

  
  


}
}
