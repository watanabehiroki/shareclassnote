import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupaddSuccessComponent } from './groupadd-success.component';

describe('GroupaddSuccessComponent', () => {
  let component: GroupaddSuccessComponent;
  let fixture: ComponentFixture<GroupaddSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupaddSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupaddSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
