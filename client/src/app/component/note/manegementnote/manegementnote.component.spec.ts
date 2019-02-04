import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManegementnoteComponent } from './manegementnote.component';

describe('ManegementnoteComponent', () => {
  let component: ManegementnoteComponent;
  let fixture: ComponentFixture<ManegementnoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManegementnoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManegementnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
