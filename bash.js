let pwd = require('./pwd')



process.stdout.write('prompt > ');

process.stdin.on('data', pwd.pwdInput);
