let pwd = require('./pwd');
let ls = require('./ls');
let cat = require('./cat');



process.stdout.write('prompt > ');

process.stdin.on('data', (data) =>{
  const cmd = data.toString().trim()
  if(cmd === 'pwd'){
    pwd();
  }
  else if(cmd === 'ls'){
    ls();
  }
  else if(cmd === 'cat'){
    cat();

  }
  else {
    process.stdout.write('you typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }

});
