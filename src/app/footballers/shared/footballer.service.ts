import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Footballer} from "./footballer";

@Injectable({
  providedIn: 'root'
})
export class FootballerService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Footballer[]> {
    console.log("Início getAll");
    return this.http.get<Footballer[]>("http://localhost:8080/api/v1/back-end/footballer");
  }

  getById(id: number): Observable<Footballer> {
    console.log("Inicio getById");
    return this.http.get<Footballer>(`http://localhost:8080/api/v1/back-end/footballer/${id}`);
  }

  save(footballer: Footballer): Observable<Footballer> {
    const url = footballer.id
      ? `http://localhost:8080/api/v1/back-end/footballer/${footballer.id}`
      : "http://localhost:8080/api/v1/back-end/footballer";

    console.log(footballer.id ? "Alterar:" : "Incluir:", JSON.stringify(footballer));

    const httpMethod = footballer.id ? 'put' : 'post';
    const request = footballer.id
      ? this.http.put<Footballer>(url, footballer)
      : this.http.post<Footballer>(url, footballer);

    return request;
  }


  delete(id: number): Observable<Footballer> {
    console.log("Apagar:"+id)
    const url = `http://localhost:8080/api/v1/back-end/footballer/${id}`;
    return this.http.delete<Footballer>(url);
  }
}
