import { Guitar } from '../models/guitar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from '../../base/result';

@Injectable({
  providedIn: 'root'
})
export class GuitarService {

  url = "https://localhost:44324/api/guitar"

  constructor(private httpClient:HttpClient) { }

  create(guitar: Guitar){
    return this.httpClient.post<Result<boolean>>(this.url, guitar)
  }

  get(){
    return this.httpClient.get<Result<Guitar[]>>(`${this.url}`)
  }

  getById(id:number){
    return this.httpClient.get<Result<Guitar[]>>(`${this.url}/GetById/${id}`)
  }

  update(guitar: Guitar){
    return this.httpClient.put<Result<boolean>>(this.url, guitar)
  }

  delete(id:number){
    return this.httpClient.delete<Result<boolean>>(`${this.url}/delete/${id}`)
  }
}
