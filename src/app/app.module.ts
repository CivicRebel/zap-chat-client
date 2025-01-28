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
import { DemoDbComponentComponent } from './demo-db-component/demo-db-component.component';
import { DatabaseService } from './services/database.service';

const BASE_URL = '/api';

@NgModule({
  declarations: [AppComponent, LoginComponent, ChatComponent, DemoDbComponentComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,  CommonModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: Client, useFactory: () => new Client(BASE_URL)},
    DatabaseService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
