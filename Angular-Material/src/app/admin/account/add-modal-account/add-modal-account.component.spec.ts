import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModalAccountComponent } from './add-modal-account.component';

describe('AddModalAccountComponent', () => {
  let component: AddModalAccountComponent;
  let fixture: ComponentFixture<AddModalAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModalAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModalAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
