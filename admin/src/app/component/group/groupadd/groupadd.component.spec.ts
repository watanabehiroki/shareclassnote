import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupaddComponent } from './groupadd.component';

describe('GroupaddComponent', () => {
  let component: GroupaddComponent;
  let fixture: ComponentFixture<GroupaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
