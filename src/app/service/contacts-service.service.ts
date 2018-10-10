import { Injectable } from '@angular/core';
import {Contact} from "../model/Contact";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/internal/operators";

@Injectable()
export class ContactsService {

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Array<Contact>> {
    return this.http.get("http://localhost:4200/assets/api/contacts.json")
      .pipe(map(response => response["contacts"]));
  }
}
