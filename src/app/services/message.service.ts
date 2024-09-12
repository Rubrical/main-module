import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  sendMessageTokenIsExpired(message: string, targetDomain: string): void {
    window.postMessage(message, targetDomain);
  }

}
