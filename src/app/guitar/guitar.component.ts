
import { Component, OnInit } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { GuitarService } from './service/guitar.service';
import { Guitar } from './model/guitar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guitar',
  imports: [TableModule, ToastModule, CommonModule, TagModule, SelectModule, ButtonModule, InputTextModule, FormsModule],
  providers: [MessageService],
  templateUrl: './guitar.component.html',
  styleUrl: './guitar.component.css'
})
export class GuitarComponent implements OnInit {

  guitars:Guitar[] = []

  constructor(private guitarService: GuitarService, private messageService: MessageService){}

  ngOnInit() {
    this.get()
  }

  get(){
     this.guitarService.get().subscribe(result => {

      if(!result.success) return this.messageService.add({ severity: 'error', summary: 'Error', detail: result.message })

      this.guitars = result.data

     })
  }

  delete(id:number){

    this.guitarService.delete(id).subscribe(result => {

      if(!result.success) return this.messageService.add({ severity: 'error', summary: 'Error', detail: result.message })

      this.messageService.add({ severity: 'success', summary: 'Success', detail: result.message});

    })

  }

  update(guitar:Guitar){

    this.guitarService.update(guitar).subscribe(result => {

      if(!result.success) return this.messageService.add({ severity: 'error', summary: 'Error', detail: result.message })

      this.messageService.add({ severity: 'success', summary: 'Success', detail: result.message });

    })

  }

}
