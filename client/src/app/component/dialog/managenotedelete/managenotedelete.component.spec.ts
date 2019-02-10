import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagenotedeleteComponent } from './managenotedelete.component';

describe('ManagenotedeleteComponent', () => {
  let component: ManagenotedeleteComponent;
  let fixture: ComponentFixture<ManagenotedeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagenotedeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagenotedeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
