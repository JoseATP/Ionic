import { Messages } from './../../models/messages';

import { Injectable } from '@angular/core';
import { AngularFirestore } from '../../../node_modules/angularfire2/firestore';


@Injectable()
export class ChatProvider {

  constructor(
          public db:AngularFirestore) {
   
 }

  addMessages(msg:Messages){
    const id =this.db.createId();
    this.db.doc('/messages/'+id).set(msg);
  }

  getMessages(){
    return this.db.collection<Messages>('messages').valueChanges();
  }

}
