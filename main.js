let inputArr=process.argv.slice(2);
let fs = require('fs');
let path = require('path');

//tasks needed
//1. tree command
//2. organize command
//3.help command

let command=inputArr[0];

switch(command){
  case "tree":
    TreeFn(inputArr[1]);
    break;
  case "organize":
    OrganizeFn(inputArr[1]);
    break;
  case "help":
    helpFn();
    break;
  default:
    console.log("Please 🙏 input valid command!");

}

function TreeFn(dirPath){
  console.log("Tree command implemented");
}
function OrganizeFn(dirPath){
//  console.log("Organize command implemented");

  if(dirPath==undefined){
    console.log("Kindly enter correct path!");
    return;
  }
  else{
    let doesExist=fs.existsSync(dirPath);
    if(doesExist){
      let destPath=path.join(dirPath,"organized_files");
      if(fs.existsSync(destPath)==false)
        fs.mkdirSync(destPath);
    }
    else{
      console.log("Kindly enter correct path");
      return;
    }

  }



}
function helpFn(){
  console.log(`
  List of all the commands :-
  1. tree command <dir path>
  2. organize command <dir path>
  3. help command`);
}
