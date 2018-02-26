import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VmsclientComponent } from './vmsclient.component';

describe('VmsclientComponent', () => {
  let component: VmsclientComponent;
  let fixture: ComponentFixture<VmsclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmsclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmsclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
