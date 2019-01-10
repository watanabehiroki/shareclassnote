import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingnoteComponent } from './readingnote.component';

describe('ReadingnoteComponent', () => {
  let component: ReadingnoteComponent;
  let fixture: ComponentFixture<ReadingnoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingnoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
