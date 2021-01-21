import { generateBase64 } from '../src/generateBase64';
import { expect } from 'chai';

describe('generateBase64', (): void => {
  describe('with sizeMultiplier attribute', (): void => {
    it('returns string', (): void => {
      const actual: string = generateBase64({ text: 'Type Signature', sizeMultiplier: 0.5 });
      expect(actual).to.be.a('string');
    });  
  });  
  
  describe('without sizeMultiplier attribute', (): void => {
    it('includes metadata', (): void => {
      const actual: string = generateBase64({ text: 'Type Signature' });
      expect(actual).to.include('data:image/png;base64,');
    });
  });
});