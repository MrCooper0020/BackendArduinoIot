const { readFile, writeFile } = require("../../utils/file");
const fs = require("fs");

module.exports = async function(request, response){
    var content = await readFile("./src/models", "/data.json");
    var errorList = new Array();
    var data = new Object(content);
    const changes = Object.entries(request.body);
    var haveBeenUpdated = false;

    if(data == null || Object.entries(data).length == 0){
        data = {
            hasSmoke: null,
            isHighLight: null,
            temp: null
        }
    }

    changes.forEach(property => {
        if(property[0] == 'temp'){
            if(!(typeof property[1] == 'number' && !Number.isNaN(property[1]))){
                errorList.push({
                    property: property[0],
                    message: `${property[0]} property must be a number!`
                });
            } else {
                data[property[0]] = property[1];
                haveBeenUpdated = true;
            }
        }

        if(property[0] == 'isHighLight'){
            if(!(typeof property[1] == 'boolean' || (typeof property[1] == 'number' && !Number.isNaN(property[1])))){
                errorList.push({
                    property: property[0],
                    message: `${property[0]} property must be a boolean or a number!`
                });
            } else {
                data[property[0]] = property[1];
                haveBeenUpdated = true;
            }
        }

        if(property[0] == 'hasSmoke'){
            if(typeof property[1] != 'boolean'){
                errorList.push({
                    property: property[0],
                    message: `${property[0]} property must be a boolean!`
                });
            } else {
                data[property[0]] = property[1];
                haveBeenUpdated = true;
            }
        }
    });

    await writeFile("./src/models", "/data.json", data);

    if(errorList.length > 0){
        response.status(400);
        response.send(errorList);
    } else if(haveBeenUpdated){
        response.send('Status updated!');
    } else {
        response.send('No changes have been made!');
    }
}