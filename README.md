# MAC address utilities

Utility functions to transform a MAC address to string representation and number representation.

[![NPM version](https://img.shields.io/npm/v/@gidw/mac-address-util.svg)](https://www.npmjs.com/package/@gidw/mac-address-util)
[![License](https://img.shields.io/github/license/GiDW/mac-address-util.svg)](https://github.com/GiDW/mac-address-util/blob/master/LICENSE)

## Usage

```js
const macAddressUtil = require('@gidw/mac-address-util');

// Returns "88:77:66:55:44:33"
macAddressUtil.convertToMac(150046399349811);

// Returns 150046399349811
macAddressUtil.convertToNumber('88:77:66:55:44:33');
```
