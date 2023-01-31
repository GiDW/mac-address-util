/* eslint-env node, jest */

'use strict'

var assert = require('assert')

var macAddressUtil = require('./index')

describe('convertToMac', function () {
  it('should return empty string when the value is not present', function () {
    assert.strictEqual(macAddressUtil.convertToMac(), '')
  })
  it('should return empty string when the value is out of range', function () {
    assert.strictEqual(macAddressUtil.convertToMac(-1), '')
  })
  it('should return the MAC address "88:77:66:55:44:33"', function () {
    assert.strictEqual(
      macAddressUtil.convertToMac(150046399349811),
      '88:77:66:55:44:33'
    )
  })
  it('should return the MAC address "45:67:89:ab:cd:ef"', function () {
    assert.strictEqual(
      macAddressUtil.convertToMac(76310993685999),
      '45:67:89:ab:cd:ef'
    )
  })
})

describe('convertToNumber', function () {
  it('should return 0 when the value is not present', function () {
    assert.strictEqual(macAddressUtil.convertToNumber(), 0)
  })
  it('should return 0 when the value is not a valid MAC string', function () {
    assert.strictEqual(macAddressUtil.convertToNumber('abc'), 0)
  })
  it('should return the number 150046399349811', function () {
    assert.strictEqual(
      macAddressUtil.convertToNumber('88:77:66:55:44:33'),
      150046399349811
    )
  })
  it('should return the number 76310993685999', function () {
    assert.strictEqual(
      macAddressUtil.convertToNumber('45-67-89-AB-cd-Ef'),
      76310993685999
    )
  })
})
