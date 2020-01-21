
const fsModule = require('fs');

module.exports = function() {
  fsModule.readFile('./', 'utf8' , (err, data) =>{
    if(err){
      throw err
    }
    else {
      process.stdout.write(data);
      process.stdout.write("prompt > ");
    }
  })
}
