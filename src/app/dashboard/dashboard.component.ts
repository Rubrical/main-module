import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.sass'
})
export class DashboardComponent {
  private childWindow: Window | null = null;
  constructor(private authService: AuthService, private router: Router) { }

  openExternalSite() {
    if (!this.childWindow || this.childWindow.closed) {
      this.childWindow = window.open("http://localhost:4210", "othermodule");
    }

    if (this.childWindow){
      setTimeout(() => {
        this.childWindow?.postMessage({action: 'teste'}, "http://localhost:4210")
      }, 500)
    }

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
