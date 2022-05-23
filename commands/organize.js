let fs = require('fs');
let path = require('path');
let types = {
    media: ["mp4", "mkv","jpg"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
};
function OrganizeFn(dirPath){
//  console.log("Organize command implemented");
//1.input directory path
let destPath;
  if(dirPath==undefined){
    console.log("Kindly enter correct path!");
    return;
  }
  else{
    //2. creation of organized_files directory
    let doesExist=fs.existsSync(dirPath);
    if(doesExist){
      destPath=path.join(dirPath,"organized_files");
      if(fs.existsSync(destPath)==false)
        fs.mkdirSync(destPath);
    }
    else{
      console.log("Kindly enter correct path");
      return;
    }

  }
  //3.identify categories of all the files present in the current  directory
OrganizeHelper(dirPath,destPath);


}
function OrganizeHelper(src,dest){
  //3.identify categories of all the files present in the current  directory
  let childNames=fs.readdirSync(src);
  for(let i=0;i<childNames.length;i++){
    let childAddress=path.join(src,childNames[i]);
    let isFile=fs.lstatSync(childAddress).isFile();
    if(isFile){
      let category=getCategory(childNames[i]);
      if(category==undefined){
        category="others";
      }
      console.log(childNames[i]+"-->"+category);
      sendFiles(childAddress,dest,category);

    }
  }

}
function sendFiles(srcFilePath,dest,category){
  let categoryPath=path.join(dest,category);
  if(fs.existsSync(categoryPath)==false){
    fs.mkdirSync(categoryPath);
  }
  let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath, fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
     console.log(fileName, "copied to ", category);
}

function getCategory(filename){
  let ext=path.extname(filename);
  ext=ext.slice(1);
  for(let type in types){
    let typeArray=types[type];
    for(let i=0;i<typeArray.length;i++){
      if(ext==typeArray[i])
        return type;
    }
  }
}

module.exports = {
  OrganizeKey:OrganizeFn
}
