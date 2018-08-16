import { Messages } from './../../models/messages';
import { ChatProvider } from './../../providers/chat/chat';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ChatpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chatpage',
  templateUrl: 'chatpage.html',
})
export class ChatpagePage {
  messages :Array<Messages>;
  newM:Messages;
  myuserName:String;
  date: Date;
  dateA : any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public chat : ChatProvider,
              private alertCtrl: AlertController
              ) {
  this.myuserName=this.navParams.get('name');              
  this.newM = {
    "user":this.myuserName,
    "text":"",
    "date": null
  }
  }

  ionViewWillLoad() {
    this.chat.getMessages().subscribe(
      data =>{
            this.messages=data;
            this.messages.sort(function(a,b){
              return (a.date > b.date) ? 1: -1;
              });
      },
      error =>{
        console.log(error);
      }
    )
    
  }
  sentMessage(){
    this.date = new Date();
   this.newM.date=this.date;
    this.chat.addMessages(this.newM);
    this.newM.text = "";
    this.newM.date=  null;
  }

  setClass(name:String){
    console.log(name.toLowerCase());
      if(this.myuserName.toLowerCase() == name.toLowerCase()){
        return true
      }
      else{
      return false}
  }
  getDate(date){
    return date.toDate().toISOString();

  }

  presentAlert(message,date,name) {

    let alert = this.alertCtrl.create({
      title:name,
      message:date,
      subTitle:message,
      buttons: ['ok']
    });
    alert.present();
  }
}
