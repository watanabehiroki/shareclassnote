import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupnoteoperationComponent } from './groupnoteoperation.component';

describe('GroupnoteoperationComponent', () => {
  let component: GroupnoteoperationComponent;
  let fixture: ComponentFixture<GroupnoteoperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupnoteoperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupnoteoperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
