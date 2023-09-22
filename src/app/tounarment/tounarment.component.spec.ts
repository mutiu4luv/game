import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TounarmentComponent } from './tounarment.component';

describe('TounarmentComponent', () => {
  let component: TounarmentComponent;
  let fixture: ComponentFixture<TounarmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TounarmentComponent]
    });
    fixture = TestBed.createComponent(TounarmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
