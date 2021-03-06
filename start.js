var argv = require('optimist').argv;
var servers = require('./lib/richwallet/server');

if(argv.httpPort)
  server.config.httpPort = argv.httpPort;

if(argv.httpsPort)
  server.config.httpsPort = argv.httpsPort;

console.log("Richwallet and his rude boys have taken the stage");

var domain = require('domain').create();
domain.on('error', function(err) {
  console.error(err.stack);
});

domain.run(function() {
  if(servers.httpsServer)
    servers.httpsServer.listen(servers.config.httpsPort || 443);

  if(servers.httpServer)
    servers.httpServer.listen(argv.p || servers.config.httpPort || 80);
});
