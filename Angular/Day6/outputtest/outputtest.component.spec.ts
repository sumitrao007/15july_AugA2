import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputtestComponent } from './outputtest.component';

describe('OutputtestComponent', () => {
  let component: OutputtestComponent;
  let fixture: ComponentFixture<OutputtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
