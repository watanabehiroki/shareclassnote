import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupoperationComponent } from './groupoperation.component';

describe('GroupoperationComponent', () => {
  let component: GroupoperationComponent;
  let fixture: ComponentFixture<GroupoperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupoperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupoperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
