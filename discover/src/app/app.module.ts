import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientComponent } from './client/client.component';
import {ClientService} from './client.service';
import {PhotoService} from './photo.service';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ClientsComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'clients',
        component: ClientsComponent
      },
      {
        path: 'clients/:lastname',
        component: ClientComponent
      },
      {
        path: 'photos',
        component: PhotoComponent
      },
    ])
  ],
  providers: [ClientService, PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
