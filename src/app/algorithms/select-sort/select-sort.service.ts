import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import * as signalR from "@microsoft/signalr";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {SelectSortStep} from "./SelectSortStep";

@Injectable({
  providedIn: 'root'
})
export class SelectSortService {
  public selectSortStep$ = new Subject<SelectSortStep>()
  public serverResponse$ = new Subject<string>()

  private hubConnection: signalR.HubConnection
  constructor(public httpClient: HttpClient) {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${environment.baseUrl}/selectsorthub`)
      .build();
    this.hubConnection
      .start()
      .then(() => console.log('SelectSortHub Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }
  public startConnection = () => {
  }

  public addReceiveMessageDataListener = () => {
    this.hubConnection.on('sendSelectSortStep', (data) => {
      this.selectSortStep$.next(data)
    });
  }
  public triggerSelectSort(){
    this.httpClient.get<response>(`${environment.baseUrl}/SelectSort`).subscribe((p:response) => {
      this.serverResponse$.next(p.message);
    });
  }
}
interface response {
  message: string;
}
