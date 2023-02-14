const path = require('path')
//console.log(path);
console.log(path.parse(__dirname));
//output {
/*  root: 'C:\\',
  dir: 'C:\\Users\\DELL\\Desktop',
  base: 'ws node F3',
  ext: '',
  name: 'ws node F3'
}  */

console.log(path.join('file.txt' ,'../', 'firstFile.js' , '/server.js'));