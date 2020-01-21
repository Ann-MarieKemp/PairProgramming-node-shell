//output a prompt


// The stdin 'data' event fires after a user types in a line
let pwdInput = (data) => {
  const cmd = data.toString().trim(); //remove the newline
  if (cmd === 'pwd') {
    process.stdout.write('your directory: ' + process.cwd())
    process.stdout.write('\nprompt > ');
  }
  else {
    process.stdout.write('you typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }


};


module.exports = {
  pwdInput
}

