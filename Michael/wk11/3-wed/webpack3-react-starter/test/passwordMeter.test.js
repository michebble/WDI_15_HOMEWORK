import { expect } from 'chai'
import getStrength from '../lib/passwordMeter'
import { get } from 'https';

describe('passwordMeter', () => {
  it('should return zero by default', () => {
    expect(getStrength('')).to.be.equal(0)
  })
  it('should return 1 when password has eight chars', () => {
    expect(getStrength('abcdefgh')).to.deep.equal(1)
      
  })
})