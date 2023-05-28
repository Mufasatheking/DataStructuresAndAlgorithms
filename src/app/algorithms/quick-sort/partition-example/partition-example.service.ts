import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {InsertionSortStep} from "../../insertion-sort/InsertionSortStep";
import * as signalR from "@microsoft/signalr";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {QuickSortStep} from "../QuickSortStep";

@Injectable({
  providedIn: 'root'
})
export class PartitionExampleService {
  public partitionExampleStep$ = new Subject<QuickSortStep>()
  public serverResponse$ = new Subject<string>()

  private hubConnection: signalR.HubConnection
  constructor(public httpClient: HttpClient) {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${environment.baseUrl}/partitionexamplehub`)
      .build();
    this.hubConnection
      .start()
      .then(() => console.log('PartitionExampleServiceHub Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }
  public startConnection = () => {
  }

  public addReceiveMessageDataListener = () => {
    this.hubConnection.on('sendPartitionExampleStep', (data) => {
      this.partitionExampleStep$.next(data)
      console.log(data)
    });
  }
  public triggerPartitionExample(){
    this.httpClient.get<response>(`${environment.baseUrl}/QuickSort`).subscribe((p:response) => {
      this.serverResponse$.next(p.message);
    });
  }
}
interface response {
  message: string;
}
