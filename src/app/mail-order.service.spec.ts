import { TestBed } from '@angular/core/testing';

import { MailOrderService } from './mail-order.service';

describe('MailOrderService', () => {
  let service: MailOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
