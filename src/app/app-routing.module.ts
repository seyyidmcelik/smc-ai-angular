import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { AuthGuard } from './guard/auth.guard';
import { ConversationPageComponent } from './pages/conversation-page/conversation-page.component';
import { MusicPageComponent } from './pages/music-page/music-page.component';
import { ImagePageComponent } from './pages/image-page/image-page.component';
import { CodePageComponent } from './pages/code-page/code-page.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {
    path: "", component: HomePageComponent
  },
  {
    path: "login", component: LoginPageComponent
  },
  {
    path: 'user', component: UserPageComponent, canActivate: [AuthGuard], children: [
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'conversation',
        component: ConversationPageComponent
      },
      {
        path: 'music',
        component: MusicPageComponent
      },
      {
        path: 'image',
        component: ImagePageComponent
      },
      {
        path: 'code',
        component: CodePageComponent
      },
      {
        path: '**', pathMatch: 'full', redirectTo: ''
      },
    ]
  },
  {
    path: '**', pathMatch: 'full', redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
