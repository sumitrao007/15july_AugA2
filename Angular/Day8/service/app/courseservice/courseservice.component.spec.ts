import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseserviceComponent } from './courseservice.component';

describe('CourseserviceComponent', () => {
  let component: CourseserviceComponent;
  let fixture: ComponentFixture<CourseserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
