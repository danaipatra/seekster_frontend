import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  register(confPass: string) {
    if (confPass !== this.registerForm.get("password").value) {
      alert("รหัส กับ รหัสยืนยันไม่ตรงกัน !!");
      return;
    }

    this.authenticationService.register(this.registerForm).subscribe(resp => {
      this.router.navigateByUrl("/login");
    }, (err: HttpErrorResponse) => {
      if (err.status === 400) {
        alert(err.error.message);
      }
    });
  }

}
