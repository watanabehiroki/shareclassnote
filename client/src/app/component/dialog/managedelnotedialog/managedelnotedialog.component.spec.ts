import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedelnotedialogComponent } from './managedelnotedialog.component';

describe('ManagedelnotedialogComponent', () => {
  let component: ManagedelnotedialogComponent;
  let fixture: ComponentFixture<ManagedelnotedialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagedelnotedialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagedelnotedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
