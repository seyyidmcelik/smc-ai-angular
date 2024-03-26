import { Component } from '@angular/core';
import { User } from 'firebase/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {
  activeUser: User | null = null;

  constructor(private authService: AuthService) {
    this.authService.getActiveUser().subscribe(res => {
      this.activeUser = res
    })
  }
}
