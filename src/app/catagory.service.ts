import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CatagoryService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list('/catagories/',{
      query: {
        orderByChild: 'name'
      }
    });
  }

}
