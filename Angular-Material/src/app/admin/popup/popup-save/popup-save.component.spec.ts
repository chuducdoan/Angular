import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupSaveComponent } from './popup-save.component';

describe('PopupSaveComponent', () => {
  let component: PopupSaveComponent;
  let fixture: ComponentFixture<PopupSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
