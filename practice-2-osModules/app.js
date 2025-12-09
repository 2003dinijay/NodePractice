const os =require ('os'); //core module

//info about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),//operating system name
    release: os.release(),      //operating system release
    totalMem: os.totalmem(),    //total memory
    freeMem: os.freemem(),   //free memory
}
console.log(currentOS);