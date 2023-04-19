import { ReadablePropertyPipe } from './readable-property.pipe';

describe('ReadablePropertyPipe', () => {
  it('create an instance', () => {
    const pipe = new ReadablePropertyPipe();
    expect(pipe).toBeTruthy();
  });
});
