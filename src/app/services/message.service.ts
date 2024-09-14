import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  sendMessageTokenIsExpired(target: Window | null, message: any, targetDomain: string): void {
    if (target === null) return;

    setInterval(
      () => {
        target?.postMessage(message, targetDomain);
      },
      30000
    );

  }

}
