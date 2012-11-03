
computeHash = require 'sha1'

class ContentAddressableStore
  constructor: (@store) ->
  write: (data, cb) ->
    hash = computeHash data
    @store.write hash, data
    if cb then cb null, hash else hash
  read: (hash, cb) -> @store.read hash, cb

module.exports = ContentAddressableStore