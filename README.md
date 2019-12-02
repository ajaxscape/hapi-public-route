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
    .........
  }
});
```

where ```options``` is an object containing the hapi route options

eg
```
{
    tags: ['my-tag']
}