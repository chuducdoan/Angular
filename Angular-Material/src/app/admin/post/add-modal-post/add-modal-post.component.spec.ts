import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModalPostComponent } from './add-modal-post.component';

describe('AddModalPostComponent', () => {
  let component: AddModalPostComponent;
  let fixture: ComponentFixture<AddModalPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModalPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModalPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
