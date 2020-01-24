# MAC address utilities

Utility functions to transform a MAC address to string representation and number representation.

[![NPM version](https://img.shields.io/npm/v/@gidw/mac-address-util.svg)](https://www.npmjs.com/package/@gidw/mac-address-util)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![License](https://img.shields.io/github/license/GiDW/mac-address-util.svg)](https://github.com/GiDW/mac-address-util/blob/master/LICENSE)

## Usage

```js
var macAddressUtil = require('@gidw/mac-address-util')

// Returns "88:77:66:55:44:33"
macAddressUtil.convertToMac(150046399349811)
// Returns "45:67:89:ab:cd:ef"
macAddressUtil.convertToMac(76310993685999)
// Returns ""
macAddressUtil.convertToMac(-1)

// Returns 150046399349811
macAddressUtil.convertToNumber('88:77:66:55:44:33')
// Returns 76310993685999
macAddressUtil.convertToNumber('45-67-89-AB-cd-Ef')
// Returns 0
macAddressUtil.convertToNumber('abc')
```
