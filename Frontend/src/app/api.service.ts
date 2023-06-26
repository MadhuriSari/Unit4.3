import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public addData(body: any) {
    return this.http.post('http://localhost:3000/add-product', body);
  }
  public getAllData() {
    return this.http.get('http://localhost:3000/find-all-products');
  }
  public findOne(id: any) {
    return this.http.get(`http://localhost:3000/find-product/${id}`);
  }
  public delete(body: any) {
    return this.http.post('http://localhost:3000/delete-product', body);
  }
  public update(body: any) {
    return this.http.post('http://localhost:3000/update-product', body);
  }
}
