const path = require ('path');
console.log(path.sep); //separator

//joins a sequance of path segments into one path returns a normalized path
const filePath= path.join('/content','subfolder','test.txt');//
console.log(filePath);


//gives the last portion of a path
const base = path.basename(filePath);
console.log(base);


//gives the absolute path
const absolute= path.resolve(__dirname,'content','subfolder','test.txt'); //__dirname gives the current directory
console.log(absolute);//gives the absolute path from root directory
