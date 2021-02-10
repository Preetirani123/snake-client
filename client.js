const net = require('net');

//Establishes connection with the game server
 
const connect = function(data) {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connecting', () => {
    conn.write(data);
  })
  conn.on('data', (data) => {
    console.log('New message from the server', data)
  })

  return conn;
}
module.exports = connect;



