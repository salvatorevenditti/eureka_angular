import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private http: HttpClient) {

  }

  signIn(signInForm : FormGroup) {

    let newMaster = {
      username : signInForm.value.email,
      password : signInForm.value.password,
      email : signInForm.value.email,
      confirmPassword : signInForm.value.confirm,
      enabled : true
    }

    return this.http.post<Master>('http://localhost:8080/master', newMaster, {observe : 'response'});
  }

}

export class Master {
  username!: string;
  password!: string;
  email!: string;
  confirmPassword!: string;
  enabled!: boolean;
  errorText!: string | null;
}

