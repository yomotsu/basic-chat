// var port = process.env.PORT || 3002;
var port = 80; // Azure Web Apps only listens on ports 80 & 443
var io = require( 'socket.io' ).listen( port );

  io.set('transports', ['websocket','xhr-polling']);
  io.set("polling duration", 10);

console.log( port );

io.on( 'connection', function ( socket ) {

  console.log( 'connected' );

  socket.on( 'msg', function( data ) {
    io.emit( 'msg', data );
  } );

  socket.on( 'disconnect', function () {
    console.log( 'disconnected' );
  } );

});

console.log( 'started' );
