import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IteractionComponent } from './iteraction.component';

describe('IteractionComponent', () => {
  let component: IteractionComponent;
  let fixture: ComponentFixture<IteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
