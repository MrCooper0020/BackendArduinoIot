const fs = require("fs");

exports.readFile = function(filePath, fileName){
    return new Promise( async (resolve, reject) => {
        if(fs.existsSync(filePath)){
            const content = JSON.parse(await fs.promises.readFile(filePath + fileName));
            resolve(content);
        } else {
            resolve(null)
        }
    });
}

exports.writeFile = function(filePath, fileName, content){
    return new Promise( async (resolve, reject) => {
        
        if(!fs.existsSync(filePath)){
            await fs.promises.mkdir(filePath);
        }

        resolve(await fs.promises.writeFile(filePath + fileName, JSON.stringify(content)));
    });
}