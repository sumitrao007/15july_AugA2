import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IteraChildComponent } from './itera-child.component';

describe('IteraChildComponent', () => {
  let component: IteraChildComponent;
  let fixture: ComponentFixture<IteraChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IteraChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IteraChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
