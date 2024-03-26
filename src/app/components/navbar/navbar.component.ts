import { PopupService } from './../../services/popup.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'firebase/auth';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: User | null = null;

  constructor(private authService: AuthService, private popupService: PopupService) { }

  ngOnInit() {
    this.authService.getActiveUser().subscribe(user => {
      this.currentUser = user;
    });
  }

  popupToggle() {
    this.popupService.togglePopup()
  }
}
