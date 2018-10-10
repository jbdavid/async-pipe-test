import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongTermObservableComponent } from './long-term-observable.component';

describe('LongTermObservableComponent', () => {
  let component: LongTermObservableComponent;
  let fixture: ComponentFixture<LongTermObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongTermObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongTermObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
