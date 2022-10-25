import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { catchError, Observable } from 'rxjs';
import { SignInService } from 'src/services/sign-in.service';
import { MatSnackBar, MatSnackBarConfig, _MatSnackBarBase } from '@angular/material/snack-bar'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInError: boolean = false;

  constructor(
    private _signInService: SignInService,
    private router: Router,
    private _snackBar: MatSnackBar) {

  }
  ngOnInit(): void {
    this.signInError = this.router.url.includes('signin/error');
    if (this.signInError) {
      this.openSnackBar()
    }
  }

  matcher = new MyErrorStateMatcher();

  openSnackBar() {
    this._snackBar.open('Errore in fase di registrazione!', 'Riprova!', {
      
    });
  }

  checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    let pass = group?.get('password')?.value;
    let confirmPass = group?.get('confirm')?.value
    return pass === confirmPass ? null : { notSame: true }
  }

  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(8)]),
    confirm: new FormControl('', [Validators.required]),
    tel: new FormControl('', [Validators.required, Validators.pattern('[+]{1}[0-9]{2}[ ]{1}[0-9]{3}[ ]{1}[0-9]{3}[ ]{1}[0-9]{4}')])

  }
    , { validators: this.checkPasswords });
  ;

  submitForm() {
    this._signInService.signIn(this.signInForm).subscribe(
      response => {
        this.router.navigate(['/dashboard/master']);
    },
    error => {
      this.router.navigate(['/signin/error'], error);
    });
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return form != null && form.control != null ? form.control.hasError('notSame') : false;
  }
}