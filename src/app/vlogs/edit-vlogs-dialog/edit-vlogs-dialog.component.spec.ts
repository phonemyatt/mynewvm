import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVlogsDialogComponent } from './edit-vlogs-dialog.component';

describe('EditVlogsDialogComponent', () => {
  let component: EditVlogsDialogComponent;
  let fixture: ComponentFixture<EditVlogsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVlogsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVlogsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
