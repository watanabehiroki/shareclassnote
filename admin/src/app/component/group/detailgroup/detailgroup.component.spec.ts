import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailgroupComponent } from './detailgroup.component';

describe('DetailgroupComponent', () => {
  let component: DetailgroupComponent;
  let fixture: ComponentFixture<DetailgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
