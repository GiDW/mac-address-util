'use strict';

/**
 * @module mac-address-util
 */

module.exports = {

    /**
     * Convert a numeric MAC address to a standard MAC address notation
     *
     * @param {number} macNum
     * @param {boolean} [debug]
     * @returns {string}
     */
    convertToMac: function convertToMac (macNum, debug) {

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

                if (debug) {

                    console.warn('convertToMac - Invalid MAC number length');
                }
            }

            if (typeof completeMacStr === 'string' &&
                completeMacStr.length === 12) {

                for (i = 0; i < 6; i++) {

                    result += completeMacStr[2 * i] +
                        completeMacStr[(2 * i) + 1] + ':';
                }

                result = result.substring(0, 17);

            } else {

                if (debug) {

                    console.warn(
                        'convertToMac - Invalid complete MAC string',
                        completeMacStr
                    );
                }
            }

        } else {

            if (debug) {

                console.warn('convertToMac - Invalid MAC number');
            }
        }

        return result;
    },

    /**
     * Convert a MAC address to a number
     *
     * @param {string} macStr
     * @param {boolean} [debug]
     * @returns {number}
     */
    convertToNumber: function convertToNumber (macStr, debug) {

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

                if (debug) {

                    console.warn(
                        'convertToNumber - Invalid MAC address' +
                        ' - Unknown separator'
                    );
                }
            }

            if (separator) {

                splits = macStr.split(separator);
                length = splits.length;

                if (length === 6) {

                    macHexStr = splits.join('');
                    result = parseInt(macHexStr, 16);

                } else {

                    if (debug) {

                        console.warn(
                            'convertToNumber - Invalid MAC address' +
                            ' - Invalid split',
                            splits
                        );
                    }
                }
            }

        } else {

            if (debug) {

                console.warn('convertToNumber - Invalid MAC address');
            }
        }

        return result;
    }
};
