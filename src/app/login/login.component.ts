import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent implements OnInit{
  @Input()
  username = ''
  @Input()
  password = ''

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
    sessionStorage.removeItem("token")
  }

  onSubmit() {
    if (this.authservice.login(this.username, this.password)) {
      this.router.navigate(['/dashboard']);

    } else {
      alert('Invalid credentials');
    }

  }

}
