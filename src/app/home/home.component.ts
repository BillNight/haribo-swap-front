import { Component, OnInit } from '@angular/core';

// INTERFACES
import { IToken } from 'src/app/shared-module/interfaces/token.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tokensList: IToken[] = [
    { _id: '1', address: 'asjas324x23xx22f34f23', name: 'token' },
    { _id: '2', address: 'asjas324x23xx22f34f24', name: 'token' },
    { _id: '3', address: 'asjas324x23xx22f34f25', name: 'token' },
    { _id: '4', address: 'asjas324x23xx22f34f26', name: 'token' },
    { _id: '1', address: 'asjas324x23xx22f34f23', name: 'token' },
    { _id: '2', address: 'asjas324x23xx22f34f24', name: 'token' },
    { _id: '3', address: 'asjas324x23xx22f34f25', name: 'token' },
    { _id: '4', address: 'asjas324x23xx22f34f26', name: 'token' }
  ];

  constructor() {}

  ngOnInit(): void {
  }

}
