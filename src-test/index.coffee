
{memory} = require '../lib/index'
assert = require 'assert'

contentAddressable = memory()

describe 'ContentAddressable', () ->
  describe 'read/write', () ->
    it 'should write and read an object sync', () ->
      hash1 = contentAddressable.write 'value1'
      hash2 = contentAddressable.write 'value2'
      assert.equal contentAddressable.read(hash1), 'value1'
      assert.equal contentAddressable.read(hash2), 'value2'
    it 'should write and read an object async', (done) ->
      contentAddressable.write 'value1', (err, hash) ->
        contentAddressable.read hash, (err, res) ->
          assert.equal res, 'value1'
          done()