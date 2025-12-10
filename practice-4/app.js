// const {readFileSync}= require('fs');  //synchronous way to read files
// const {writeFileSync}= require('fs'); //synchronous way to write files

const {readFileSync, writeFileSync}= require('fs'); 
const first = readFileSync('./content/first.txt','utf8'); //specify encoding to get string otherwise it returns buffer
const second = readFileSync('./content/second.txt','utf8');
console.log(first, second);

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result : ${first}, ${second}`, 
    {flag: 'a'});
    
//flag a is for append if file already exists

//if flag is "a", it will append the content to the existing file instead of overwriting it.