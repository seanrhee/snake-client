const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  }, () => {
    console.log("Successfully Connected!");
  })
  
  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });

  conn.on('end', () => {
    console.log("You have been disconnected.");
  });

  conn.setEncoding('utf8');

  return conn;
};

console.log('Connecting...');
connect();


