//Globals - no window
// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

// console.log(__dirname);
// setInterval(() => {
//     console.log('Hello World');
// }, 1000);


//module example
// const secret='SUPER SECRET';
// const john='john'   ;
// const peter='peter';
// add these lines to module.names.js

//add these lines to utils.js
// const sayHi= (name) => {
//     console.log(`Hello there ${name}`);
// }

const names= require('./module.names'); //start with ./ because it's a local file and not a core module
const sayHi= require('./utils');
// console.log(names);

const data= require('./alternative-flavour')
require('./6-mind-grenade');

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

