'use strict';

/**
 * @module mac-address-util
 */

module.exports = {

    /**
     * Convert a numeric MAC address to a standard MAC address notation
     *
     * @param {number} macNum
     * @returns {string}
     */
    convertToMac: function convertToMac (macNum) {

        var macStr, macStrLength, macStrLengthDiff, completeMacStr;
        var i, padding;
        var result = '';

        if (typeof macNum === 'number' &&
            macNum >= 0 &&
            macNum <= 281474976710655) {

            macStr = macNum.toString(16);
            macStrLength = macStr.length;
            macStrLengthDiff = 12 - macStrLength;

            if (macStrLengthDiff === 0) {

                completeMacStr = macStr;

            } else if (macStrLengthDiff > 0 && macStrLengthDiff <= 12) {

                padding = '';
                for (i = 0; i < macStrLengthDiff; i++) {
                    padding += '0';
                }

                completeMacStr = padding + macStr;

            } else {

                console.warn('convertToMac - Invalid MAC number length');
            }

            if (typeof completeMacStr === 'string' &&
                completeMacStr.length === 12) {

                for (i = 0; i < 6; i++) {

                    result += completeMacStr[2 * i] +
                        completeMacStr[(2 * i) + 1] + ':';
                }

                result = result.substring(0, 17);

            } else {

                console.warn(
                    'convertToMac - Invalid complete MAC string',
                    completeMacStr
                );
            }

        } else {

            console.warn('convertToMac - Invalid MAC number');
        }

        return result;
    },

    /**
     * Convert a MAC address to a number
     *
     * @param {string} macStr
     * @returns {number}
     */
    convertToNumber: function convertToNumber (macStr) {

        var splits, length, macHexStr;
        var result = 0;
        var separator;

        if (typeof macStr === 'string' &&
            macStr.length === 17) {

            if (macStr.indexOf(':') !== -1) {

                separator = ':';

            } else if (macStr.indexOf('-') !== -1) {

                separator = '-';

            } else {

                console.warn(
                    'convertToNumber - Invalid MAC address' +
                    ' - Unknown separator'
                );
            }

            if (separator) {

                splits = macStr.split(separator);
                length = splits.length;

                if (length === 6) {

                    macHexStr = splits.join('');
                    result = parseInt(macHexStr, 16);

                } else {

                    console.warn(
                        'convertToNumber - Invalid MAC address' +
                        ' - Invalid split',
                        splits
                    );
                }
            }

        } else {

            console.warn('convertToNumber - Invalid MAC address');
        }

        return result;
    }
};
