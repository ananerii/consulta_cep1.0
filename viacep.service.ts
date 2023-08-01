import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {
urlviacep: string;


  constructor(
private http: HttpClient

  ) { }

  consultacep(cep:string) : Observable<any> {
this.urlviacep = `https://viacep.com.br/ws/${cep}/json/`
return this.http.get(this.urlviacep)
  }
}
