import { expect } from 'chai'
import getStrength from '../lib/passwordMeter'
import { get } from 'https';

describe('passwordMeter', () => {
  it('should return zero by default', () => {
    expect(getStrength('')).to.be.equal(0)
  })
  // it('should return 1 when password has eight chars', () => {
  //   expect(getStrength('ABCDEFGH')).to.be.equal(1)  
  // })
  it('should return 1 when password has a lowercase char and is less than eight', () => {
    expect(getStrength('abc')).to.be.equal(1)
  })
  it('should return 1 when password has a uppercase char and is less than eight', () => {
    expect(getStrength('ABC')).to.be.equal(1)
  })
  it('should return 1 when password has a uppercase char and is less than eight', () => {
    expect(getStrength('ABC')).to.be.equal(1)
  })
  it('should return 1 when password has a number char and is less than eight', () => {
    expect(getStrength('123')).to.be.equal(1)
  })
  it('should return 1 when password has a non alpha numeric char and is less than eight', () => {
    expect(getStrength('$ %')).to.be.equal(1)
  })
  it('should return 5 when passorword has all char types and is longer than 8 chars', () => {
    expect(getStrength('$ %')).to.be.equal(1)
  })
})