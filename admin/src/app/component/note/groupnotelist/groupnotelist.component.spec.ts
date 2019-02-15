import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupnotelistComponent } from './groupnotelist.component';

describe('GroupnotelistComponent', () => {
  let component: GroupnotelistComponent;
  let fixture: ComponentFixture<GroupnotelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupnotelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupnotelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
