import { Service } from '@angular/core';

@Service()
export class Auth {

constructor() {

}
update(accesso: boolean) {
    sessionStorage.setItem('podeAcessar', accesso.toString());
}

podeAcessar(): boolean {
    let podeAcessarString = sessionStorage.getItem('podeAcessar');

    if (!podeAcessarString) {
        return false;
    }

    return JSON.parse(podeAcessarString);
}

}
