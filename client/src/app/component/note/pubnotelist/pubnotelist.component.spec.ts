import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubnotelistComponent } from './pubnotelist.component';

describe('PubnotelistComponent', () => {
  let component: PubnotelistComponent;
  let fixture: ComponentFixture<PubnotelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubnotelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubnotelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
