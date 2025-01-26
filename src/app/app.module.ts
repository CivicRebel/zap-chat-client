import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Client } from './client/api.client';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';

const BASE_URL = '/api';

@NgModule({
  declarations: [AppComponent, LoginComponent, ChatComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,  CommonModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: Client, useFactory: () => new Client(BASE_URL) }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
