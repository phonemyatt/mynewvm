import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostpageComponent } from './hostpage.component';

describe('HostpageComponent', () => {
  let component: HostpageComponent;
  let fixture: ComponentFixture<HostpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
