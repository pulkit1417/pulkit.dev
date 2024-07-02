import { Injectable } from '@angular/core';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { contact } from '../../data-types';
import { Router } from '@angular/router';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private db?: any;
  constructor(private firestore: Firestore, private router: Router) { }

  async createMessage(message: contact) {
    try {
      const docRef = await addDoc(collection(this.firestore, 'contact'), message);
      this.router.navigate(['/']);
      return true;
    } catch (e) {
      console.error('Error adding document: ', e);
      return false;
    }
  }
}
