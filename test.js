'use strict'

var test = require('tape')
var prefix = require('./')

test(function (t) {
  t.equal(prefix, '', 'empty in node / unprefixed browsers')
  t.end()
})
