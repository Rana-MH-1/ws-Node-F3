const fs = require('fs')
//console.log(fs);

console.log('Before Reading...');
//const data = fs.readFileSync('./file.txt', 'utf-8')
fs.readFile('./file.txt','utf-8', (err,data)=>{
   /*  fs.writeFile('./file2.txt', 'hello '+data,(err,data)=>{
        console.log('file2.txt created succ');
    }) */
    fs.appendFile('file2.txt', 'it s time to leave ' + data, (err,data)=>{
        console.log('file2.txt updated succ');
    })
})
//console.log(data); // output buffer ==> we add the encoding utf-8 as an option ==> String
console.log('After Reading');
