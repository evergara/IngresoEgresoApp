import { TestBed } from '@angular/core/testing';

import { UserDataFirebaseService } from './user-data-firebase.service';

describe('UserDataFirebaseService', () => {
  let service: UserDataFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDataFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
