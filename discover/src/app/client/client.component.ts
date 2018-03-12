import { Component, OnInit, Input } from '@angular/core'; 
import { Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client} from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'my-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  @Input() data: Client;
  @Output() memberChangeEvent = new EventEmitter();

  constructor(
    private clientService: ClientService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    if (!this.data) {
      this.route.params.subscribe(params => {
        let lastname = params['lastname'];
        this.data = this.clientService.getClient(lastname);
      })
    }
  }

  memberChange():void{
    let client: Client = this.data;
    client.member = !client.member;
    this.memberChangeEvent.emit(client); 
  }

}
