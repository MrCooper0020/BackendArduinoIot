const { readFile, writeFile } = require("../utils/file");
const fs = require("fs");

module.exports = async function(request, response){
    var content = await readFile("./src/models", "/data.json");

    if(content == null || content.length == 0){
        content = {
            hasSmoke: null,
            isHighLight: null,
            temp: null
        }
    }

    await writeFile("./src/models", "/data.json", {
        hasSmoke: request.body.hasSmoke != undefined ? request.body.hasSmoke : content.hasSmoke,
        isHighLight: request.body.isHighLight != undefined ? request.body.isHighLight : content.isHighLight,
        temp: request.body.temp != undefined ? request.body.temp : content.temp
    });

    response.send('Status updated!');
}