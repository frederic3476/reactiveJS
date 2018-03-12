import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'my-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  message: String = '';
  clients: Client[];

  constructor(private clientService: ClientService) {
  }

  ngOnInit() {
    this.clients = this.clientService.getClients();
  }

  messageFromChild(client: Client):void {
    let msg: String = (client.member) ? 'est membre' : 'n\est pas membre';
    this.message = client.getFullName() + ' ' + msg;
    console.log(client.firstname);
  }

}
