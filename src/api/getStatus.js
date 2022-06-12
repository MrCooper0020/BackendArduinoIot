const { readFile } = require("../utils/file");

module.exports = async function(request, response){
    const content = await readFile("./src/models", "/data.json");

    if(content == null){
        response.send({
            hasSmoke: null,
            isHighLight: null,
            temp: null
        });
    } else {
        response.send(content);
    }
}