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
    if (key === 'j') {
      connection.write("Say: I'm gonna get you!");
    }
    if (key === 'k') {
      connection.write("Say: lol");
    }
    if (key === 'l') {
      connection.write("Say: Nooooooo!");
    }
    if (key === ';') {
      connection.write("Say: Yessssss!");
    }
  }

  stdin.on("data", handleUserInput);


  return stdin;
};

module.exports = {
  setupInput
}