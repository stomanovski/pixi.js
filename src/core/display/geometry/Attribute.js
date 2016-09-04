class Attribute
{

    constructor(buffer, stride = 0, start = 0, normalised = false)
 	{
        this.buffer = buffer;
        this.normalized = normalised;
        this.stride = stride;
        this.start = start;
        this.type = null;
    }

  	destroy()
  	{
        /*
            fill in
        */
  	}

}

module.export = Attribute;