import { TestBed } from '@angular/core/testing';

import { ContoleLivros } from './contole-livros';

describe('ContoleLivros', () => {
  let service: ContoleLivros;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContoleLivros);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
