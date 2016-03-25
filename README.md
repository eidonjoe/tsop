##What is tsop?
It's the strength of password.

You can determine the strength of your password through this.

##Usage
####First, install the tsop with `npm`:

```javascript
  $ npm install tsop
```
####Then use in your project

tsop exports just a function `verify()` and two parameters `password`,`mix`
```javascript
/**
 * tsop.verify(password[, mix])
 * @param  {[string]} password [necessarily]
 * @param  {[boolen]} mix      [optional]
 * @return {[string]}          
 */
    var tsop = require('tsop');

    tsop.verify('111111');          // => 'weak'
    tsop.verify('qweqwe');          // => 'weak'
    tsop.verify('123123123123');    // => 'middle'
    tsop.verify('123qwe');          // => 'middle'
    tsop.verify('123qwe!@#');       // => 'strong'
    
    // if mix == true ,it will not allow use a purely number or a purely letter string to be password 
    tsop.verify('111111',true);     // => 'disable'
    tsop.verify('qweqwe',true);     // => 'disable'
    tsop.verify('!@#!@#',true);     // => 'weak'
    tsop.verify('qwe!@#',true);     // => 'middle'
    tsop.verify('123qwe',true);     // => 'middle'
    tsop.verify('123qwe!@#',true);  // => 'strong'
    
``` 
##Test 
```javascript
  $ npm install mocha
```
go to the dir where you installed tsop 

```javascript
  $ mocha
```
console output 
```javascript
  test.js
    -  mix == false or no mix parameter
    ✓ should return weak when password === 111111
    ✓ should return weak when password === qweqwe
    ✓ should return middle when password === 123123123123
    ✓ should return middle when password === 123qwe
    ✓ should return strong when password === 123qwe!@#
    - mix == true
    ✓ should return disable when password === 111111
    ✓ should return disable when password === qweqwe
    ✓ should return weak when password === !@#!@#
    ✓ should return middle when password === qwe!@#
    ✓ should return middle when password === 123qwe
    ✓ should return strong when password === 123qwe!@#
```
##License
The MIT License (MIT)

Copyright (c) 2016 eidonjoe