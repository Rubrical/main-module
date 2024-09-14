import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.sass'
})
export class DashboardComponent {
  private childWindow: Window | null = null;
  private token = sessionStorage.getItem("token");

  constructor(
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) { }

  openExternalSite() {
    if (!this.childWindow || this.childWindow.closed) {
      this.childWindow = window.open(`http://localhost:4210`, "othermodule");

      setTimeout(() => {
        if (this.childWindow) {
          this.childWindow.postMessage({token: this.token}, "http://localhost:4210");
        }
      }, 1000);

      this.messageService.sendMessageTokenIsExpired(
        this.childWindow, {tokenExpired: true}, "http://localhost:4210"
      );
      
    }

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
