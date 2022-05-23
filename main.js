#!/usr/bin/env node

let inputArr=process.argv.slice(2);
let fs = require('fs');
let path = require('path');
let organizeObj = require("./commands/organize");
let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
};

//tasks needed
//1. tree command
//2. organize command
//3.help command

let command=inputArr[0];

switch(command){
  case "tree":
    treeObj.treeKey(inputArr[1]);
    break;
  case "organize":
    organizeObj.OrganizeKey(inputArr[1]);
    break;
  case "help":
    helpObj.helpKey();
    break;
  default:
    console.log("Please 🙏 input valid command!");

}
