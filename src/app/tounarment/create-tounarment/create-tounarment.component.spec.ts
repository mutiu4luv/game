import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTounarmentComponent } from './create-tounarment.component';

describe('CreateTounarmentComponent', () => {
  let component: CreateTounarmentComponent;
  let fixture: ComponentFixture<CreateTounarmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTounarmentComponent]
    });
    fixture = TestBed.createComponent(CreateTounarmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
