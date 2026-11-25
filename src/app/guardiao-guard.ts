import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from './services/auth';

export const guardiaoGuard: CanActivateFn = (route, state) => {
  
  let podeAcessar = inject (Auth).podeAcessar();
  
  if(!podeAcessar){
    
    inject(Router).navigate(['hello-world']);
    return false;
  }

  return true;
};
