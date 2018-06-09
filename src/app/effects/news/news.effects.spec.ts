import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { NewsEffects } from './news.effects';

describe('NewsService', () => {
  let actions$: Observable<any>;
  let effects: NewsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NewsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(NewsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
