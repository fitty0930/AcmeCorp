import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcmeStoreComponent } from './acme-store.component';

describe('AcmeStoreComponent', () => {
  let component: AcmeStoreComponent;
  let fixture: ComponentFixture<AcmeStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcmeStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcmeStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
