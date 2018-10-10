import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeqComponent } from './seq.component';

describe('SeqComponent', () => {
  let component: SeqComponent;
  let fixture: ComponentFixture<SeqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
