'use strict';

var os = require('os');

/**
 * Append a string to another string ensuring to preserve line ending characters.
 *
 * ```js
 * console.log([appendString('abc\r\n', 'def')]);
 * //=> [ 'abc\r\ndef\r\n' ]
 *
 * console.log([appendString('abc\n', 'def')]);
 * //=> [ 'abc\ndef\n' ]
 *
 * // uses os.EOL when a line ending is not found
 * console.log([appendString('abc', 'def')]);
 * //=> [ 'abc\ndef' ]
 * ```
 * @param  {String} `str` String that will be used to check for an existing line ending. The suffix is appended to this.
 * @param  {String} `suffix` String that will be appended to the str.
 * @return {String} Final String
 * @api public
 */

module.exports = function appendString(str, suffix) {
  if (!suffix || !suffix.length) {
    return str;
  }
  var eol;
  if (str.slice(-2) === '\r\n') {
    eol = '\r\n';
  } else if (str.slice(-1) === '\n') {
    eol = '\n';
  } else {
    return [str, os.EOL, suffix].join('');
  }
  return [str, suffix, eol].join('');
};
