# bn-number-utils [![Build Status](https://img.shields.io/github/stars/sh4hids/bn-number-utils.svg)](https://github.com/sh4hids/bn-number-utils) · [![License](https://img.shields.io/github/license/sh4hids/bn-number-utils.svg)](https://github.com/sh4hids/bn-number-utils) · [![GitHub issues](https://img.shields.io/github/issues/sh4hids/bn-number-utils.svg?style=popout)](https://github.com/sh4hids/bn-number-utils/issues) · [![Build Status](https://travis-ci.com/sh4hids/bn-number-utils.svg?branch=master)](https://travis-ci.com/sh4hids/bn-number-utils)

This is a small utility library to help you to convert any numbers to Bengali number.

_n. b. It only converts numeric values_

## Install

```bash
$ npm i bn-number-utils
```

### convertNumbers

This function will convert any numeric input to Bengali numeric value

#### Import

```
const { convertNumbers } = require("bn-number-utils");
```

`Or`

```
import { convertOnlyNumbers } from "bn-number-utils";
```

#### Usage

```
convertNumbers(123); => '১২৩'
convertNumbers(1.23); => '১.২৩'
convertNumbers(-123); => '-১২৩'
convertNumbers(-123); => '-১২৩'
convertNumbers('3 টি প্রোফাইল পাওয়া গিয়েছে'); => '৩ টি প্রোফাইল পাওয়া গিয়েছে'
convertNumbers(''); => 'প্রদানকৃত ইনপুটটি সঠিক নয়'
```
