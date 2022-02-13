import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Resource } from '../../models/resource';

const url = `${environment.apiUrl}/recurso`;

@Injectable({
  providedIn: 'root'
})

export class ResourcesService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(url);
  }

  getById(id: string) {
    return this.http.get<Resource>(`${url}/${id}`);
  }

  create(params: any) {
      return this.http.post(url, params);
  }

  update(id: string, params: any) {
      return this.http.put(`${url}/${id}`, params);
  }

  delete(id: string) {
      return this.http.delete(`${url}/${id}`);
  }
}