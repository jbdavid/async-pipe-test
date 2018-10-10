import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'my-seq',
  templateUrl: './seq.component.html',
  styleUrls: ['./seq.component.css']
})
export class SeqComponent implements OnInit {

  @Input()
  items$: Observable<Array<any>>

  constructor() { }

  ngOnInit() {
  }

}
