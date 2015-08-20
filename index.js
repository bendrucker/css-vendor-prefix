'use strict'

var window = require('global/window')
var document = require('global/document')
var toArray = require('to-array')

var PREFIXES = /-(webkit|ms)-/

module.exports = detectVendorPrefix()

function detectVendorPrefix () {
  if (!window.getComputedStyle) return ''
  var styles = window.getComputedStyle(document.documentElement, '')
  var match = toArray(styles).join('').match(PREFIXES)
  return match ? match[1] : ''
}
