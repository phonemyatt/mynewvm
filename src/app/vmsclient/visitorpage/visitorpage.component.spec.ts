import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorpageComponent } from './visitorpage.component';

describe('VisitorpageComponent', () => {
  let component: VisitorpageComponent;
  let fixture: ComponentFixture<VisitorpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
