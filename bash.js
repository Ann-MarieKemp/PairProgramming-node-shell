//output a prompt
process.stdout.write('prompt > ');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the newline
  if (cmd === 'pwd') {
    process.stdout.write('your directory: ' + process.cwd())
  }
  else {
    process.stdout.write('you typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }


});
