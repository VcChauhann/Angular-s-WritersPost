import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeInterpreterService {

  private messageSource = new BehaviorSubject<any>(onmessage);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  sendMessage(message: string) {
    this.messageSource.next(message);
  }
}
