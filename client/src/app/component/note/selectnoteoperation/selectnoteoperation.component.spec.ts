import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectnoteoperationComponent } from './selectnoteoperation.component';

describe('SelectnoteoperationComponent', () => {
  let component: SelectnoteoperationComponent;
  let fixture: ComponentFixture<SelectnoteoperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectnoteoperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectnoteoperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
