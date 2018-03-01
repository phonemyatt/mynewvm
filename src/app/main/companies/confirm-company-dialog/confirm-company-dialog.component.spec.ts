import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCompanyDialogComponent } from './confirm-company-dialog.component';

describe('ConfirmCompanyDialogComponent', () => {
  let component: ConfirmCompanyDialogComponent;
  let fixture: ComponentFixture<ConfirmCompanyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmCompanyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmCompanyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
