/*! modulo_3 v0.0.0 - MIT license */
'use strict';

var modulo_3 = function (number) {
  return number % 3;
}

if ( typeof module !== "undefined")
{
  module.exports = modulo_3;
}
