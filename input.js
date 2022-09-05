let connection;

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  connection = conn;

  const handleUserInput = function (key) {
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      connection.write("Move: up");
    }
    if (key === 's') {
      connection.write("Move: down");
    }
    if (key === 'a') {
      connection.write("Move: left");
    }
    if (key === 'd') {
      connection.write("Move: right");
    }
  }

  stdin.on("data", handleUserInput);


  return stdin;
};

module.exports = {
  setupInput
}