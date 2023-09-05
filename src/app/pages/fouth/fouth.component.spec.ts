import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FouthComponent } from './fouth.component';

describe('FouthComponent', () => {
  let component: FouthComponent;
  let fixture: ComponentFixture<FouthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FouthComponent]
    });
    fixture = TestBed.createComponent(FouthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
