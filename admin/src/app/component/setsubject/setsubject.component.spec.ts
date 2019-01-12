import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetsubjectComponent } from './setsubject.component';

describe('SetsubjectComponent', () => {
  let component: SetsubjectComponent;
  let fixture: ComponentFixture<SetsubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetsubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
