import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovegroupComponent } from './removegroup.component';

describe('RemovegroupComponent', () => {
  let component: RemovegroupComponent;
  let fixture: ComponentFixture<RemovegroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovegroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovegroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
