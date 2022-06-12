const { readFile } = require("../utils/file");

module.exports = async function(request, response){
    response.send(await readFile("./src/models", "/data.json"));
}