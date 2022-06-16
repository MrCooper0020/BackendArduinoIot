const { readFile } = require("../../utils/file");

module.exports = async function(request, response){
    var content = await readFile("./src/models", "/data.json");
    var result = new Array();

    if(content == null){
        content = {
            hasSmoke: null,
            isHighLight: null,
            temp: null
        };
    }

    Object.entries(content).forEach(property => {

        function getStatus(label, value){
            if(label == "temp"){
                if(value < 30){
                    return "success";
                } else if(value > 30 && value < 50){
                    return "warning";
                } else {
                    return "danger";
                }
            } else if (label == "isHighLight"){
                if(typeof value == 'boolean'){
                    if(value){
                        return "warning";
                    } else {
                        return "success";
                    }
                } else {
                    if(value > 900){
                        return "warning";
                    } else {
                        return "success";
                    }
                }
                
            } else if (label == "hasSmoke"){
                if(value){
                    return "danger";
                } else {
                    return "success";
                }
            }
        }

        result.push({
            id: property[0],
            value: property[1],
            status: getStatus(property[0], property[1])
        });
    });

    response.send(result);
}