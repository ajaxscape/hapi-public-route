const register = function (server, opts = {}) {
  const { path, directories, options } = opts

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
