import { Component, OnInit } from '@angular/core';
import {Observable, interval, Subscription} from "rxjs";
import {Contact} from "../model/Contact";
import {ContactsService} from "../service/contacts-service.service";
import {scan} from "rxjs/internal/operators";

@Component({
  selector: 'app-short-term-observable',
  templateUrl: 'long-term-observable.component.html',
  styleUrls: ['long-term-observable.component.css']
})
export class LongTermObservableComponent implements OnInit {

  contacts$: Observable<Array<Contact>>;

  items$: Observable<Array<any>>;

  seqs = [];

  subscription: Subscription;


  constructor(private contactsService: ContactsService) {}

  ngOnInit () {
    this.contacts$ = this.contactsService.getContacts();
    this.newSeq();
    this.newSeq2();
  }

  newSeq() {

    // generate a random color
    let color = '#' + Math.random().toString(16).slice(-6);

    this.items$ = interval(1000).pipe(scan((acc, num)=>[{num, color}, ...acc].slice(0, 5), []));
  }

  newSeq2() {

    // generate a random color
    let color = '#' + Math.random().toString(16).slice(-6);

    this.seqs.push(interval(1000).pipe(scan((acc, num)=>[{num, color }, ...acc].slice(0, 5), [])));
  }
}
