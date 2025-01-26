import { Component } from '@angular/core';
import * as signalR from '@microsoft/signalr'; 

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  standalone: false,
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent { 
  connection: signalR.HubConnection;
  messages: string[] = [];
  receiver: string = '';
  message: string = '';

  constructor(){
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5276/chat-hub', { withCredentials: true })
      .build();

    this.connection.start().then(() => 
      this.connection.on('ReceiveMessage', (message: string) => {
        this.messages.push(message);
      })
    );
  }

  sendMesage() {
    this.connection.send('SendMessage', this.receiver, this.message).then(() => {
      this.messages.push(`You said: ${this.message}`); 
      this.message = '';
    });
  }
}
