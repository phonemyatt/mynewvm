import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmHostDialogComponent } from './confirm-host-dialog.component';

describe('ConfirmHostDialogComponent', () => {
  let component: ConfirmHostDialogComponent;
  let fixture: ComponentFixture<ConfirmHostDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmHostDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmHostDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
