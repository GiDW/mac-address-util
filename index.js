'use strict'

exports.convertToMac = convertToMac
exports.convertToNumber = convertToNumber

/**
 * Convert a numeric MAC address to a standard MAC address notation
 *
 * @param {number} macNum
 * @returns {string}
 */
function convertToMac (macNum) {
  var result, macStr, macStrLength, macStrLengthDiff, completeMacStr, padding, i
  result = ''

  if (typeof macNum === 'number' &&
      macNum >= 0 &&
      macNum <= 281474976710655) {
    macStr = macNum.toString(16)
    macStrLength = macStr.length
    macStrLengthDiff = 12 - macStrLength

    if (macStrLengthDiff === 0) {
      completeMacStr = macStr
    } else if (macStrLengthDiff > 0 && macStrLengthDiff <= 12) {
      padding = ''
      for (i = 0; i < macStrLengthDiff; i++) {
        padding += '0'
      }
      completeMacStr = padding + macStr
    }

    if (typeof completeMacStr === 'string' &&
        completeMacStr.length === 12) {
      for (i = 0; i < 6; i++) {
        result += completeMacStr[2 * i] +
          completeMacStr[(2 * i) + 1] + ':'
      }
      result = result.substring(0, 17)
    }
  }

  return result
}

/**
 * Convert a MAC address to a number
 *
 * @param {string} macStr
 * @returns {number}
 */
function convertToNumber (macStr) {
  var result, splits, macHexStr, separator
  result = 0

  if (typeof macStr === 'string' &&
      macStr.length === 17) {
    // Check which separator is used
    if (macStr.indexOf(':') !== -1) {
      separator = ':'
    } else if (macStr.indexOf('-') !== -1) {
      separator = '-'
    }

    if (separator) {
      splits = macStr.split(separator)
      if (splits.length === 6) {
        macHexStr = splits.join('')
        result = parseInt(macHexStr, 16)
      }
    }
  }

  return result
}
