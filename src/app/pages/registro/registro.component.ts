import { ChangeDetectionStrategy, Component, OnInit, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RegistroComponent  implements OnInit{
  contactForm!: FormGroup
  public showAlertDanger = false
  submitted = false
  constructor(public fb: FormBuilder) {
    


    
  }
  ngOnInit(): void {
    this.contactForm=this.initForm()
  }
  validarCorreo() {
    if (!this.contactForm.get('correo')?.invalid) {
      this.showAlertDanger = false;
    } else {
      this.showAlertDanger = true;
    }
  }

  initForm():FormGroup{
    return this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      tipoDocumento: [ '',Validators.required],
      contraseña: ['', [Validators.required, Validators.minLength(7)]],
      programa: ['', Validators.required],
      numeroTelefono: ['', [Validators.required, Validators.minLength(2)]],
      correo: ['', Validators.email], 
      nuevaContraseña: ['', [Validators.required, Validators.minLength(7)]],
      politica:['',Validators.requiredTrue]
    })
  }
  onSubmit(event:Event) {
   
    this.submitted=true
    if(this.contactForm.value.get('politica')==false)
    
    return 
    if (this.contactForm.invalid) {
     console.log('formulario valido');
     console.log(this.contactForm.value);

     return
      
    }
   

    console.log('invalido');
    
    
    
     
   




  }
  showAlert(){
alert('la politica es requerida')
  }
 

}


