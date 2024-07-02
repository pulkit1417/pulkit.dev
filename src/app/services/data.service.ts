import { Injectable } from '@angular/core';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { contact } from '../../data-types';
import { Router } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private db?: any;
  constructor( private router: Router) {
    this.db = getFirestore();
   }

  async createMessage(message: contact) {
    try {
      const docRef = await addDoc(collection(this.db, 'contact'), message);
      return true;
    } catch (e) {
      console.error('Error adding document: ', e);
      return false;
    }
  }
}
