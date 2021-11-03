import { NovoUsuarioService } from './novo-usuario.service';
import { Injectable } from '@angular/core';
import { first, map, switchMap } from 'rxjs/operators';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private novoUsuarioService : NovoUsuarioService) { }

  usuarioJaExiste() {

    return (control : AbstractControl ) => {
      console.log(control)
      return control.valueChanges.pipe(
        switchMap((nomeUsuario) =>
          this.novoUsuarioService.verificaUsuarioExistente(nomeUsuario)
        ),

        map((usuarioExiste)=>
          (usuarioExiste ? { usuarioExistente: true} : null)
        ),
        first()
      );
    }
  }


}
