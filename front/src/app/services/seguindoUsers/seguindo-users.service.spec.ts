import { TestBed } from '@angular/core/testing';

import { SeguindoUsersService } from './seguindo-users.service';

describe('SeguindoUsersService', () => {
  let service: SeguindoUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeguindoUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
