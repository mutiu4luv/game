import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTounarmentComponent } from './single-tounarment.component';

describe('SingleTounarmentComponent', () => {
  let component: SingleTounarmentComponent;
  let fixture: ComponentFixture<SingleTounarmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleTounarmentComponent]
    });
    fixture = TestBed.createComponent(SingleTounarmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
