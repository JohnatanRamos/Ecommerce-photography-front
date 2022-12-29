import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BaseService } from 'src/app/core/base.service';
import { Indicativos, indicativosArray } from './constants/indicativos.constant';

@Component({
  selector: 'app-form-info',
  templateUrl: './form-info.component.html',
  styleUrls: ['./form-info.component.scss'],
  providers: [MessageService],
})
export class FormInfoComponent implements OnInit {
  formContacto!: FormGroup;
  arrayIndicativos: Indicativos[] = indicativosArray;


  constructor(
    private formBuilder: FormBuilder,
    private baseService: BaseService,
    private messageService: MessageService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  buildForm() {
    this.formContacto = this.formBuilder.group({
      nombre: ['', Validators.required],
      celular: ['', Validators.required],
      indicativo: ['57', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
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

    return false;
  }

  sendEmail() {
    if (
      this.formContacto.invalid ||
      this.formContacto.controls['autoriza'].value === false
    ) {
      this.messageError('Debe llenar los campos correctamente');
      return;
    }

    this.baseService.postMethod('users', this.formContacto.value).subscribe({
      next: () => {
        this.messageSuccess(
          'Información enviada correctamente, te llkegará un mensaje al correo que diligenciaste'
        );
        this.formContacto.reset({ indicativo: "57" });
      },
      error: (err) => {
        this.messageError(err.message)
      },
    });
  }

  messageError(message: string) {
    this.messageService.add({
      key: 'alert',
      severity: 'error',
      summary: 'historiaenlinea dice:',
      detail: message,
    });
  }

  messageSuccess(message: string) {
    this.messageService.add({
      key: 'alert',
      severity: 'success',
      summary: 'historiaenlinea dice:',
      detail: message,
    });
  }
}
