const { MOVE_UP, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT } = require('./constants');

let connection;

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  connection = conn;

  // key inputs
  const handleUserInput = function (key) {
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      connection.write(MOVE_UP);
    }
    if (key === 's') {
      connection.write(MOVE_DOWN);
    }
    if (key === 'a') {
      connection.write(MOVE_LEFT);
    }
    if (key === 'd') {
      connection.write(MOVE_RIGHT);
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