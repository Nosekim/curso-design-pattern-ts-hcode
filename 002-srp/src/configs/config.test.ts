import { config } from '@src/configs';

describe('config object', () => {
  it('should be defined', () => {
    expect(config).toEqual({ index: 0 });
  });
});
