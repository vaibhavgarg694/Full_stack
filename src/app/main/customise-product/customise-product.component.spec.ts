import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomiseProductComponent } from './customise-product.component';

describe('CustomiseProductComponent', () => {
  let component: CustomiseProductComponent;
  let fixture: ComponentFixture<CustomiseProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomiseProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomiseProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
