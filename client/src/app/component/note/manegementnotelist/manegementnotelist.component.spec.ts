import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManegementnotelistComponent } from './manegementnotelist.component';

describe('ManegementnotelistComponent', () => {
  let component: ManegementnotelistComponent;
  let fixture: ComponentFixture<ManegementnotelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManegementnotelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManegementnotelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
