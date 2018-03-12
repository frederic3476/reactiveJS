import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientComponent } from './client/client.component';
import {ClientService} from './client.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'clients',
        component: ClientsComponent
      },
      {
        path: 'clients/:lastname',
        component: ClientComponent
      }
    ])
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
