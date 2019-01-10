import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectsubjectComponent } from './selectsubject.component';

describe('SelectsubjectComponent', () => {
  let component: SelectsubjectComponent;
  let fixture: ComponentFixture<SelectsubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectsubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
