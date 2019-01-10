import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharenoteComponent } from './sharenote.component';

describe('SharenoteComponent', () => {
  let component: SharenoteComponent;
  let fixture: ComponentFixture<SharenoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharenoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharenoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
