import { StartsWithThreeCharsPipe } from './starts-with-three-chars.pipe';

describe('StartsWithThreeCharsPipe', () => {
  it('create an instance', () => {
    const pipe = new StartsWithThreeCharsPipe();
    expect(pipe).toBeTruthy();
  });
});
