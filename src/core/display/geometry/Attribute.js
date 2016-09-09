class Attribute
{

    constructor(buffer, size = 2, stride = 0, start = 0, normalised = false)
 	{
        this.buffer = buffer;
        this.normalized = normalised;
        this.size = size;
        this.stride = stride;
        this.start = start;
        this.type = null;

     /*   attributes[attribData.name] = {
            type:type,
            size:mapSize(type),
            location:gl.getAttribLocation(program, attribData.name),
            //TODO - make an attribute object
            pointer: pointer
        };*/
    }

  	destroy()
  	{
        /*
            fill in
        */
  	}

}

Attribute.from = function(buffer, stride, start, normalised)
{
    return new Attribute(buffer, stride, start, normalised);
};

module.exports = Attribute;