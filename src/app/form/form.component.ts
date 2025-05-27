import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Guitar } from '../guitar/models/guitar';
import { GuitarService } from '../guitar/services/guitar.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule,InputTextModule, ButtonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  form!:FormGroup

  constructor(
    private formBuilder:FormBuilder, 
    private guitarService:GuitarService,
    private router:Router,
    private messageService: MessageService
  ){
    this.form = this.formBuilder.group({
      id:[""],
      name:[""]
    })

  }

  create(){

    const guitar = new Guitar()
    guitar.name = this.form.value.name

    this.guitarService.create(guitar).subscribe(result => {

      if(!result.success) return this.messageService.add({ severity: 'error', summary: 'Error', detail: result.message })

      this.messageService.add({ severity: 'success', summary: 'Success', detail: result.message});

      this.router.navigate([""])
    })
  }

}
