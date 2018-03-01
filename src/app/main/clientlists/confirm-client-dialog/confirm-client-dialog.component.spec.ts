import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmClientDialogComponent } from './confirm-client-dialog.component';

describe('ConfirmClientDialogComponent', () => {
  let component: ConfirmClientDialogComponent;
  let fixture: ComponentFixture<ConfirmClientDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmClientDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmClientDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
