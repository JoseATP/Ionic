import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatpagePage } from '../chatpage/chatpage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name :String;
  constructor(public navCtrl: NavController) {

  }
  messageList(){
    this.navCtrl.push(ChatpagePage, 
      {name:this.name});
      console.log(this.name);
  }
}
