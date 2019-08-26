if (process.env.NODE_ENV === 'development') {
  module.exports = require('./dist/data-model-service.js')
} else {
  module.exports = require('./dist/data-model-service.common.js')
}
