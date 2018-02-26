import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVisitorDialogComponent } from './edit-visitor-dialog.component';

describe('EditVisitorDialogComponent', () => {
  let component: EditVisitorDialogComponent;
  let fixture: ComponentFixture<EditVisitorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVisitorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVisitorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
