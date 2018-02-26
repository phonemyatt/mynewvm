import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmVisitorDialogComponent } from './confirm-visitor-dialog.component';

describe('ConfirmVisitorDialogComponent', () => {
  let component: ConfirmVisitorDialogComponent;
  let fixture: ComponentFixture<ConfirmVisitorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmVisitorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmVisitorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
