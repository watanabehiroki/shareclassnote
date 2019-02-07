import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupreadqrcodeComponent } from './groupreadqrcode.component';

describe('GroupreadqrcodeComponent', () => {
  let component: GroupreadqrcodeComponent;
  let fixture: ComponentFixture<GroupreadqrcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupreadqrcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupreadqrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
