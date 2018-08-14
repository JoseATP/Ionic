
import { Injectable } from '@angular/core';
import { Contacts, Contact, IContactFindOptions, ContactFieldType } from '../../../node_modules/@ionic-native/contacts';

/*
  Generated class for the ContactsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactsServiceProvider {
 
  ourtype: ContactFieldType[]=["displayName"];  
  constructor(
    private contacts:Contacts) {
   
  }


  async viewContacts(filter):Promise<Contact[]> {
    try {
      const option: IContactFindOptions = {
        filter: filter
      }
      console.log('Provider'+this.contacts.find(this.ourtype, option));
      return this.contacts.find(this.ourtype, option);      
    } catch (error) {
      console.error(error);
    }
  }

}
