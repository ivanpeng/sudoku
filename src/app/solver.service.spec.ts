/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SolverService } from './solver.service';

describe('SolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SolverService]
    });
  });

  it('should ...', inject([SolverService], (service: SolverService) => {
    expect(service).toBeTruthy();
  }));
});
