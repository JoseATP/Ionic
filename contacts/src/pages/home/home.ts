import { ContactsServiceProvider } from './../../providers/contacts-service/contacts-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Contact } from '../../../node_modules/@ionic-native/contacts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contactos: Array<Contact>;
  searchTerm: string = '';
  constructor(public navCtrl: NavController,
  public contactsServir:ContactsServiceProvider) {
    this.contactsServir.viewContacts('').then(res => {
      this.contactos= res;
     // console.log('Search' + this.contactos);
    }).catch(error => {
      console.log(error);
    });
  }


  filterContact(){
    this.contactsServir.viewContacts(this.searchTerm).then(res => {
      this.contactos= res;
      console.log('Search'+ this.contactos);
    }).catch(error => {
      console.log(error);
    });
  }


}


