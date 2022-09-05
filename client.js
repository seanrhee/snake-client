const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  })

  // on connect message
  conn.on('connect', () => {
    console.log("Successfully Connected!");
    conn.write("Name: SCL");
    
  });

  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });

  // message to client when disconnected
  conn.on('end', () => {
    console.log("You have been disconnected.");
    process.exit();
  });

  conn.setEncoding('utf8');

  return conn;
};

module.exports = connect;