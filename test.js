'use strict';

require('mocha');
var os = require('os');
var assert = require('assert');
var appendString = require('./');

describe('appendString', function() {
  it('should append the string suffix to the string prefix with \\r\\n', function() {
    assert.equal(appendString('abc\r\n', 'def'), 'abc\r\ndef\r\n');
  });

  it('should append the string suffix to the string prefix with \\n:', function() {
    assert.equal(appendString('abc\n', 'def'), 'abc\ndef\n');
  });

  it('should append the string suffix to the string prefix without EOL', function() {
    assert.equal(appendString('abc', 'def'), 'abc' + os.EOL + 'def');
  });

  it('should append the buffer suffix to the string prefix with \\r\\n', function() {
    assert.equal(appendString('abc\r\n', new Buffer('def')), 'abc\r\ndef\r\n');
  });

  it('should append the buffer suffix to the string prefix with \\n:', function() {
    assert.equal(appendString('abc\n', new Buffer('def')), 'abc\ndef\n');
  });

  it('should append the buffer suffix to the string prefix without EOL', function() {
    assert.equal(appendString('abc', new Buffer('def')), 'abc' + os.EOL + 'def');
  });

  it('should not append EOL when suffix is empty', function() {
    assert.deepEqual(appendString('abc', ''), 'abc');
  });

  it('should not append EOL when suffix is undefined', function() {
    assert.deepEqual(appendString('abc'), 'abc');
  });

  it('should not append EOL when suffix is empty buffer', function() {
    assert.deepEqual(appendString('abc', new Buffer('')), 'abc');
  });
});
