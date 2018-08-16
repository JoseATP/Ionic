import { Messages } from '../../models/messages';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

/*
  Generated class for the ChatServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatServiceProvider {

  constructor(
   public db: AngularFirestore) {
   
  }

  addMessage(msg:Messages){
    const id = this.db.createId();
    this.db.doc('/messages/'+id).set(msg);
  }
 getMessages(){
   return this.db.collection<Messages>('messages').valueChanges();
 }

}
