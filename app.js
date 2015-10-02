var io = require( 'socket.io' ).listen( 3002 );

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
