import { ToastService } from './../shared/toast/toast.service';
import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { GuitarService } from './services/guitar.service';
import { Guitar } from './models/guitar';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guitar',
  imports: [TableModule, CommonModule, TagModule, SelectModule, ButtonModule, InputTextModule, FormsModule],
  templateUrl: './guitar.component.html',
  styleUrl: './guitar.component.css'
})
export class GuitarComponent implements OnInit {

  guitars:Guitar[] = []

  constructor(
    private guitarService: GuitarService, 
    private router:Router,
    private toastService: ToastService
  ){}

  ngOnInit() {
    this.get()
  }

  create(){
    this.router.navigate(["form"])
  }

  get(){
     this.guitarService.get().subscribe(result => {

      if(!result.success) return this.toastService.showError("Error", result.message)

      this.guitars = result.data

     })
  }

  delete(id:number){

    this.guitarService.delete(id).subscribe(result => {

      if(!result.success) return this.toastService.showError("Error", result.message)

        this.toastService.showSuccess("Success", result.message)
        this.get()

    })

  }

  update(guitar:Guitar){

    this.guitarService.update(guitar).subscribe(result => {

      if(!result.success) return this.toastService.showError("Error", result.message)

        this.toastService.showSuccess("Success", result.message)
        this.get()

    })

  }

}
