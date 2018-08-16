import { Messages } from './../../models/messages';
import { ChatServiceProvider } from './../../providers/chat-service/chat-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  messages : Array<Messages>
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public chatservice :ChatServiceProvider) {
  }

  ionViewWillLoad() {
    this.chatservice.getMessages().subscribe(
      messages => {
            this.messages=messages;
      },
      error => {

      }
    )
  }

}
