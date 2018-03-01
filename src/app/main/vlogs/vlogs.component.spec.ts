import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VlogsComponent } from './vlogs.component';

describe('VlogsComponent', () => {
  let component: VlogsComponent;
  let fixture: ComponentFixture<VlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
