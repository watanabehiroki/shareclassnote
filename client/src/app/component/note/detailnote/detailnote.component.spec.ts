import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailnoteComponent } from './detailnote.component';

describe('DetailnoteComponent', () => {
  let component: DetailnoteComponent;
  let fixture: ComponentFixture<DetailnoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailnoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
