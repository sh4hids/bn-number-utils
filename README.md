# bn-number-utils [![Build Status](https://img.shields.io/github/stars/sh4hids/bn-number-utils.svg)](https://github.com/sh4hids/bn-number-utils) · [![License](https://img.shields.io/github/license/sh4hids/bn-number-utils.svg)](https://github.com/sh4hids/bn-number-utils)

This is a small utility library to help you to convert any numbers to Bengali number.

_n. b. It only converts numeric values_

## Install

```bash
$ npm i bn-number-utils
```

### convertNumbers

This function will convert any numeric input to Bengali numeric value

#### Node.js

```
const { convertNumbers } = require("bn-number-utils");
convertNumbers(123); => '১২৩'
convertNumbers(1.23); => '১.২৩'
convertNumbers(-123); => '-১২৩'
convertNumbers(-123); => '-১২৩'
```

#### ES6+

```
import { convertOnlyNumbers } from "bn-number-utils";
convertNumbers(123); => '১২৩'
convertNumbers(1.23); => '১.২৩'
convertNumbers(-123); => '-১২৩'
convertNumbers(-123); => '-১২৩'
```
