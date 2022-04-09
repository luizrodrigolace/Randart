import { TestBed } from '@angular/core/testing';

import { SeguidoresUsersService } from './seguidores-users.service';

describe('SeguidoresUsersService', () => {
  let service: SeguidoresUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeguidoresUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
