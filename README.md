# hapi-public-route
Hapi plugin for serving up the public route

## installation

'npm install hapi-public-route -S'

## usage

```
const Hapi = require('hapi');
const hapiPublicRoute = require('hapi-public-route');

server = new Hapi.Server();
server.connection();
server.register({
  register: hapiPublicRoute,
  options: {
     path: '/public/{path*}',
     directories: [
        'public',
        'node_modules/xyz-example-module/assets       
     ],
     options: {
        tags: ['my-tag']
     }
  }
});
```

where:
- ```path``` is the path where the static files will be loaded from

    Default: '/public/{path*
        
- ```directories``` is an array of folders where the static files can be found
    
    Default: ['public']
    
- ```options``` is an object containing the hapi route options

    Default: {}