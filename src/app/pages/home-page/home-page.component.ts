import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent{
  constructor(private authService: AuthService,private router:Router){
    this.authService.getActiveUser().subscribe(user=> {
      if (user) {
        this.router.navigate(['/user'])
      }
    })
  }
}
