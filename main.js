let inputArr=process.argv.slice(2);
console.log(inputArr);

//tasks needed
//1. tree command
//2. organize command
//3.help command

let command=inputArr[0];

switch(command){
  case "tree":
    break;
  case "organize":
    break;
  case "help":
    break;
  default:
    console.log("Please 🙏 input valid command!");

}

function TreeFn(dirPath){
  console.log("Tree command implemented");
}
function OrganizeFn(dirPath){
  console.log("Organize command implemented");
}
function helpFn(dirPath){
  console.log("Help Command implemented");
}
