import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtimeComponent } from './newtime.component';

describe('NewtimeComponent', () => {
  let component: NewtimeComponent;
  let fixture: ComponentFixture<NewtimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewtimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
