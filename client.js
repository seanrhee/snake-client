const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 3000
  })

  conn.on('connect', () => {
    console.log("Successfully Connected!");
    conn.write("Name: SCL");
    
  });

  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });

  conn.on('end', () => {
    console.log("You have been disconnected.");
    process.exit();
  });

  conn.setEncoding('utf8');

  return conn;
};

module.exports = connect;