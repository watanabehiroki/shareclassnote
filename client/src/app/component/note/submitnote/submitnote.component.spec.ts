import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitnoteComponent } from './submitnote.component';

describe('SubmitnoteComponent', () => {
  let component: SubmitnoteComponent;
  let fixture: ComponentFixture<SubmitnoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitnoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
