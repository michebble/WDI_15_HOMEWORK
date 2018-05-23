import { expect } from 'chai'
import getStrength from '../lib/passwordMeter'

describe('passwordMeter', () => {
  it('should return zero by default', () => {
    expect(getStrength('')).to.be.equal(0)
  })
})