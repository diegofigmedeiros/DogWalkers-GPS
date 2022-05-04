import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import { Comentario } from '../../model/comentario';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
//import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreComentarioService {

  colecaoComentarios: AngularFirestoreCollection<Comentario>;
  NOME_COLECAO = 'comentarios';

  constructor(private afs: AngularFirestore) {
    this.colecaoComentarios = afs.collection(this.NOME_COLECAO);
  }

  listarComentarios(): Observable<Comentario[]> {
    // usando options para idField para mapear o id gerado pelo firestore para o campo id de usuário
    return this.colecaoComentarios.valueChanges({idField: 'id'});
  }

  inserirComentario(comentario: Comentario): Observable<object> {
    // Object.assign({}, comentario) é usado para passar um objeto json puro. Não se aceita passar um objeto customizado
    // o from transforma uma promise num Observable, para mantermos a assinatura similar ao do outro service
    return from(this.colecaoComentarios.add(Object.assign({}, comentario)));
  }

  remover(id: string): Observable<void> {
    return from(this.colecaoComentarios.doc(id).delete());
  }

}

