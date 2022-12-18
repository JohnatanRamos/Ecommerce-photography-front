import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { extensiones } from '../../../../constants/extensiones';

@Component({
  selector: 'app-form-info',
  templateUrl: './form-info.component.html',
  styleUrls: ['./form-info.component.scss'],
})
export class FormInfoComponent implements OnInit {
  formContacto!: FormGroup;
  arrayExtensiones = extensiones;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {}

  buildForm() {
    this.formContacto = this.formBuilder.group({
      nombre: ['', Validators.required],
      celular: ['', Validators.required],
      indicativo: ['57', Validators.required],
      correo: ['', Validators.required, Validators.email],
      autoriza: [false, Validators.required],
    });
  }

  validateInput(name: string) {
    if (
      this.formContacto.controls[name].invalid &&
      this.formContacto.controls[name].touched
    ) {
      return true;
    }

    return false;
  }

  validateCelIndicativo() {
    if (
      (this.formContacto.controls['celular'].invalid &&
        this.formContacto.controls['celular'].touched) ||
      (this.formContacto.controls['indicativo'].invalid &&
        this.formContacto.controls['indicativo'].touched)
    ) {
      return true;
    }

    return false
  }
}
