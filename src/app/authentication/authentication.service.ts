import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient, private router: Router) {}

  login(form: FormGroup): Observable<any> {
    return this.http.post<any>(`${environment.api}/users/login`, form.value);
  }

  register(form: FormGroup): Observable<any> {
    return this.http.post<any>(`${environment.api}/users`, form.value);
  }
}
