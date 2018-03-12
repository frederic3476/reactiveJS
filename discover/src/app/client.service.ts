import { Injectable } from '@angular/core';
import { Client } from './client';

@Injectable()
export class ClientService {

  private clients: Client[] = [
    new Client('toto', 'tata', true),
    new Client('titi', 'tutu', false),
    new Client('tyty', 't', true)
  ];

  constructor() { }

  getClients(): Client[] {
    return this.clients;
  }

  getClient(lastname:String):Client {
    console.log(lastname);
    for(let i=0; i<this.clients.length;i++){
      if (this.clients[i].lastname === lastname) {
        console.log('ok');
        return this.clients[i];
      } 
    }
    return null;
  }

}
