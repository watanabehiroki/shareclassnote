import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupaddqrcodeComponent } from './groupaddqrcode.component';

describe('GroupaddqrcodeComponent', () => {
  let component: GroupaddqrcodeComponent;
  let fixture: ComponentFixture<GroupaddqrcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupaddqrcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupaddqrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
