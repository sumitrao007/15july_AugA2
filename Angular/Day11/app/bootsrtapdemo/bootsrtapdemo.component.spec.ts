import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootsrtapdemoComponent } from './bootsrtapdemo.component';

describe('BootsrtapdemoComponent', () => {
  let component: BootsrtapdemoComponent;
  let fixture: ComponentFixture<BootsrtapdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootsrtapdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootsrtapdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
