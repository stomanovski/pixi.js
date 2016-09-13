

class Geometry
{

 	constructor()
 	{
 		this.attributes = {};

 		this.buffers = [];

 		this.indexBuffer = null;

 		this.glVertexArrayObjects = [];


  	}

  	addAttribute(id, attribute)
  	{
  		this.attributes[id] = attribute;

  		if(this.buffers.indexOf(attribute.buffer) === -1)
  		{
	  		this.buffers.push(attribute.buffer);
  		}

  		return this;
  	}

  	addIndex(buffer)
  	{
  		buffer.index = true;
  		this.indexBuffer = buffer;

  		if(this.buffers.indexOf(buffer) === -1)
  		{
	  		this.buffers.push(buffer);
  		}

  		return this;
  	}



  	generateAttributeLocations()
  	{
		let array = [];

  		for (var i in this.attributes)
  		{
  			array.push(i);
  		}

  		array.sort();
  		//array.reverse();

  		let map = {};

  		for (i = 0; i < array.length; i++)
  		{
  			map[array[i]] = i;
  		}

  		return map;
  	}

  	destroy()
  	{

  	}
}

Geometry.fromShader = function(shader, size)
{

}

module.exports = Geometry;
