import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private isActive: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  togglePopup(): void {
    this.isActive.next(!this.isActive.value);
  }

  isToggleActive(): Observable<boolean> {
    return this.isActive.asObservable();
  }
}
