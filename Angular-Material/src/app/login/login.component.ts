import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  formLogin!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: ['']
    })
    if(this.authService.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
  }

  onSubmit() {
    console.log(this.formLogin.value)
    if(this.formLogin.valid) {
      // this.authService.login(this.formLogin.value).subscribe({
      //   next: (res) => {
      //     this.router.navigate(['admin']);
      //   },
      //   error: (err) => {
      //     alert(err.message);
      //   }
      // })
      this.authService.login(this.formLogin.value);
    }
  }

}
