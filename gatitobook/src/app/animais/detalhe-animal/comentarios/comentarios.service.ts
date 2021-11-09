import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { Comentarios } from './comentarios';



const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private httpClient : HttpClient) { }

  buscaComentario(id : number):Observable<Comentarios>{
    return this.httpClient.get<Comentarios>(`${API}/photos/${id}/comments`)
  }

  incluiComentario(id : number, commentText : string): Observable<Comentarios>{
    return this.httpClient.post<Comentarios>(`${API}/photos/${id}/comments`, {
      commentText,
    })
  }
}
