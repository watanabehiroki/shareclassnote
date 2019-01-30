import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupaddlistComponent } from './groupaddlist.component';

describe('GroupaddlistComponent', () => {
  let component: GroupaddlistComponent;
  let fixture: ComponentFixture<GroupaddlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupaddlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupaddlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
