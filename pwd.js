//output a prompt


// The stdin 'data' event fires after a user types in a line



module.exports = function(){
  process.stdout.write('your directory: ' + process.cwd())
  process.stdout.write('\nprompt > ');

};
