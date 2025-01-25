import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonContent, IonFooter, IonicModule, IonicRouteStrategy, IonTitle, IonToolbar } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { Client } from './client/api.client';
import { ChatComponent } from './chat/chat.component';

const BASE_URL = '/api';

@NgModule({
  declarations: [AppComponent, LoginComponent, ChatComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CommonModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: Client, useFactory: () => new Client(BASE_URL) }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
