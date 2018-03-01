import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmVlogsDialogComponent } from './confirm-vlogs-dialog.component';

describe('ConfirmVlogsDialogComponent', () => {
  let component: ConfirmVlogsDialogComponent;
  let fixture: ComponentFixture<ConfirmVlogsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmVlogsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmVlogsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
