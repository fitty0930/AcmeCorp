import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcmeAboutComponent } from './acme-about.component';

describe('AcmeAboutComponent', () => {
  let component: AcmeAboutComponent;
  let fixture: ComponentFixture<AcmeAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcmeAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcmeAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
