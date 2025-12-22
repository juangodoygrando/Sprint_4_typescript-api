
import { vi, test, expect, beforeEach } from 'vitest';


let store: Record<string, string> = {};
vi.stubGlobal('localStorage', {
  getItem: (key: string) => store[key] ?? null,
  setItem: (key: string, value: string) => { store[key] = value; },
  removeItem: (key: string) => { delete store[key]; },
  clear: () => { store = {}; },
});


import { saveRatings } from '../logic/ratingsJoke/ratingsLogic';

beforeEach(() => {
  store = {}; 
});

test('saveRatings guarda un rating en localStorage', () => {
  saveRatings('Why did the chicken cross the road?', '2');

  const saved = JSON.parse(localStorage.getItem('reportJokes')!);
  expect(saved).toHaveLength(1);
  expect(saved[0]).toEqual({
    joke: 'Why did the chicken cross the road?',
    score: '2',
    date: expect.any(String), 
  });
});
