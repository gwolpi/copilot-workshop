import { LicencePlatePipe } from './licence-plate.pipe';

describe('LicencePlatePipe', () => {
  let pipe: LicencePlatePipe;

  beforeEach(() => {
    pipe = new LicencePlatePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return AA-12-BB when the input is aa12bb', () => {
    expect(pipe.transform('aa12bb')).toEqual('AA-12-BB');
  });
});
