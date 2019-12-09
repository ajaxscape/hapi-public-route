const register = function (server, opts = {}) {
  // Set options with defaults if required
  const { path = '/public/{path*}', directories = ['public'], options = {} } = opts

  server.register(require('@hapi/inert'))

  server.route({
    method: 'GET',
    path,
    handler: {
      directory: {
        path: directories
      }
    },
    options
  })
}

const pkg = require('./package')

exports.plugin = {
  name: pkg.name,
  register,
  once: true,
  pkg
}
