import { Component } from '@angular/core';
import { ViacepService } from './viacep.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'consultacep';

  form: FormGroup;
  saida: any;
  zerarInput: string = '';

  constructor(private viaCepService: ViacepService) {
    this.form = new FormGroup({
      cep: new FormControl({ value: null, disabled: false }, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(8)]))
    })
  }

  consultacep() {
    //debugger;
    //const model = this.form.getRawValue();
    const cep = this.form.get('cep')?.value;

    this.viaCepService.consultacep(cep).subscribe({
      next: (res) => {
        this.saida = res;
      },
      error: () => {
        alert('ocorreu erro na requisição do cep')
      }
    });
  }

  desfazer(){
    this.saida = '';
    this.zerarInput = '';
  }
}
