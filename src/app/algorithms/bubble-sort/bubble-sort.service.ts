import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr";
import {environment} from "../../../environments/environment";
import {BubbleSortStep} from "./BubbleSortStep";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BubbleSortService {
  public bubbleSortStep$ = new Subject<BubbleSortStep>()
  public serverResponse$ = new Subject<string>()

  private hubConnection: signalR.HubConnection
  constructor(public httpClient: HttpClient) {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${environment.baseUrl}/bubblesorthub`)
      .build();
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }
  public startConnection = () => {
  }

  public addReceiveMessageDataListener = () => {
    this.hubConnection.on('sendBubbleSortStep', (data) => {
      this.bubbleSortStep$.next(data)
    });
  }
  public triggerBubbleSort(){
    this.httpClient.get<response>(`${environment.baseUrl}/BubbleSort`).subscribe((p:response) => {
      this.serverResponse$.next(p.message);
    });
  }
}
interface response {
  message: string;
}
