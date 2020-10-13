import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcmeProductsComponent } from './acme-products.component';

describe('AcmeProductsComponent', () => {
  let component: AcmeProductsComponent;
  let fixture: ComponentFixture<AcmeProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcmeProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcmeProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
