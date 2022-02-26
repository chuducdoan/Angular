import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModalSpendingComponent } from './add-modal-spending.component';

describe('AddModalSpendingComponent', () => {
  let component: AddModalSpendingComponent;
  let fixture: ComponentFixture<AddModalSpendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModalSpendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModalSpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
