import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SignalRTestService {
  private hubConnection: signalR.HubConnection
  constructor() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${environment.baseUrl}/signalRTestHub`)
      .build();
    this.hubConnection
      .start()
      .then(() => console.log('SignalRTestHub Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }
  public startConnection = () => {
  }

  public addReceiveMessageDataListener = () => {
    this.hubConnection.on('receivemessage', (data) => {
      console.log(data);
    });
  }
}
