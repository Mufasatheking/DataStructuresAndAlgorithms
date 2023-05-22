import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import * as signalR from "@microsoft/signalr";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {InsertionSortStep} from "./InsertionSortStep";

@Injectable({
  providedIn: 'root'
})
export class InsertionSortService {
  public insertionSortStep$ = new Subject<InsertionSortStep>()
  public serverResponse$ = new Subject<string>()

  private hubConnection: signalR.HubConnection
  constructor(public httpClient: HttpClient) {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${environment.baseUrl}/insertionsorthub`)
      .build();
    this.hubConnection
      .start()
      .then(() => console.log('InsertionSortHub Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }
  public startConnection = () => {
  }

  public addReceiveMessageDataListener = () => {
    this.hubConnection.on('sendInsertionSortStep', (data) => {
      this.insertionSortStep$.next(data)
      //console.log(data)
    });
  }
  public triggerInsertionSort(){
    this.httpClient.get<response>(`${environment.baseUrl}/InsertionSort`).subscribe((p:response) => {
      this.serverResponse$.next(p.message);
    });
  }
}
interface response {
  message: string;
}
