# hapi-public-route
Hapi plugin for serving up the public route

## installation

'npm install hapi-public-route -S'

## usage

```
const Hapi = require('hapi');

const server = hapi.server();
await server.register([{
  plugin: require('hapi-public-route'),
  options: {
    path: '/puplic/{path*}',
    directories: [
      'public',
      'node_modules/xyz-example-module/assets'
    ],
    options: {
      tags: ['my-tag']
    }
  }
}]);
```

where:
- ```path``` is the path where the static files will be loaded from

    Default: '/public/{path*}'
        
- ```directories``` is an array of folders where the static files can be found
    
    Default: ['public']
    
- ```options``` is an object containing the hapi route options

    Default: {}