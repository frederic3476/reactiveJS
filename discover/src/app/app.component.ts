import { Component, OnInit } from '@angular/core';
import { Client} from './client';
import { ClientService } from './client.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
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
