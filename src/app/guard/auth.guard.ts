import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';

export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService)
  const router = inject(Router)

  return authService.getActiveUser().pipe(map(activeUser => {
    if (!activeUser) {
      router.navigate(['/login']);
      return false
    }
    return true
  }))

};
