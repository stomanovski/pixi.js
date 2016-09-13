var defaultValue = require('pixi-gl-core').shader.defaultValue;

function extractAttributesFromSrc(vertexSrc, mask)
{
    var vertAttributes = extractAttributesFromString(vertexSrc, mask);
    console.log(vertAttributes)
    return vertAttributes;
}


function extractAttributesFromString(string)
{
    var maskRegex = new RegExp('^(projectionMatrix|uSampler|filterArea)$');

    var attributesArray = [];
    var nameSplit;


    // clean the lines a little - remove extra spaces / teabs etc
    // then split along ';'
    var lines = string.replace(/\s+/g,' ')
                .split(/\s*;\s*/);

    // loop through..
    for (var i = 0; i < lines.length; i++)
    {
        var line = lines[i].trim();

        if(line.indexOf('attribute') > -1)
        {
            var splitLine = line.split(' ');
            var type = splitLine[1];

            var name = splitLine[2];
            var size = 1;

            if(name.indexOf('[') > -1)
            {
                // array!
                nameSplit = name.split(/\[|\]/);
                name = nameSplit[0];
                size *= Number(nameSplit[1]);
            }

            if(!name.match(maskRegex))
            {
                attributesArray.push({
                    value:defaultValue(type, size),
                    name:name,
                    location:0,
                    type:type
                });
            }
        }
    }

    attributesArray.sort(function(a, b){
        return (a.name > b.name)
    });

    var attributes = {};

    // now lets sort them alphabetically..
    for (var i = 0; i < attributesArray.length; i++)
    {
        var attrib = attributesArray[i];
        attrib.location = i;
        attributes[attrib.name] = attrib;
    };

    return attributes;
}

module.exports = extractAttributesFromSrc;
