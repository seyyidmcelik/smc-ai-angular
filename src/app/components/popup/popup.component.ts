import { PopupService } from './../../services/popup.service';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  currentUser: User | null = null;
  isPopupActive: boolean = false;

  constructor(private authService: AuthService, private router: Router, private popupService: PopupService) { }

  ngOnInit() {
    this.authService.getActiveUser().subscribe(user => this.currentUser = user)
    this.popupService.isToggleActive().subscribe(res => this.isPopupActive = res);
  }

  handleSignOut() {
    this.authService.signOut().then(() => {
      this.router.navigate(['/'])
    })
  }

  closePopup() {
    this.popupService.togglePopup()
  }
}
