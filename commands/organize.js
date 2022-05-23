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
      console.log(childNames[i]+"-->"+category);

    }
  }

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
