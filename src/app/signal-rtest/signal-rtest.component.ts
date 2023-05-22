import { Component, OnInit } from '@angular/core';
import {SignalRTestService} from "./signal-rtest.service";

@Component({
  selector: 'app-signal-rtest',
  templateUrl: './signal-rtest.component.html',
  styleUrls: ['./signal-rtest.component.css']
})
export class SignalRTestComponent implements OnInit {

  constructor(public signalRTestService: SignalRTestService,) { }

  ngOnInit(): void {
    //this.signalRTestService.startConnection();
    this.signalRTestService.addReceiveMessageDataListener()
  }

}
