// Generated by CoffeeScript 1.3.3
(function() {
  var assert, contentAddressable, memory;

  memory = require('../lib/index').memory;

  assert = require('assert');

  contentAddressable = memory();

  describe('ContentAddressable', function() {
    return describe('read/write', function() {
      it('should write and read an object sync', function() {
        var hash1, hash2;
        hash1 = contentAddressable.write('value1');
        hash2 = contentAddressable.write('value2');
        assert.equal(contentAddressable.read(hash1), 'value1');
        return assert.equal(contentAddressable.read(hash2), 'value2');
      });
      it('should write and read an object async', function(done) {
        return contentAddressable.write('value1', function(err, hash) {
          return contentAddressable.read(hash, function(err, res) {
            assert.equal(res, 'value1');
            return done();
          });
        });
      });
      return it('should write and read multiple objects', function() {
        var data, each, hashs, i, _i, _len, _results;
        data = ['value1', 'value2'];
        hashs = contentAddressable.writeAll(data);
        _results = [];
        for (i = _i = 0, _len = hashs.length; _i < _len; i = ++_i) {
          each = hashs[i];
          _results.push(assert.equal(contentAddressable.read(each), data[i]));
        }
        return _results;
      });
    });
  });

}).call(this);
