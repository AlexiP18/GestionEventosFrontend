import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = 'http://localhost:8080/';
export const AUTH_HEADER = 'authorization';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  //registrar el cliente
  registerClient(signupRequestDTO: any): Observable<any> {
    return this.http.post(BASIC_URL + 'client/sign-up', signupRequestDTO);
  }
  //registramos el equipo
  registerCompany(signupRequestDTO: any): Observable<any> {
    return this.http.post(BASIC_URL + 'company/sign-up', signupRequestDTO);
  }
}
