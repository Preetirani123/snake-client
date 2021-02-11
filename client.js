const net = require('net');
const { IP, PORT } = require('./constants');

//Establishes connection with the game server
 
const connect = function(data) {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log('New message from the server', data)
  })

  conn.on('connect', () => {
    conn.write('Successfully connected to game server');
    conn.write('Name: PRI');
  });
  

  return conn;
}

module.exports = {connect};



