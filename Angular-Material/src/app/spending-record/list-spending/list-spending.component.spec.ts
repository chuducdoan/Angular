import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSpendingComponent } from './list-spending.component';

describe('ListSpendingComponent', () => {
  let component: ListSpendingComponent;
  let fixture: ComponentFixture<ListSpendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSpendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
