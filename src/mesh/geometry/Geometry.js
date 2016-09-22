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

		let map = {};

		for (i = 0; i < array.length; i++)
		{
			map[array[i]] = i;
		}

		return map;
	}

	destroy()
	{
		for (let i = 0; i < this.buffers.length; i++)
		{
			this.buffers[i].destroy();
		};

		this.buffers = null;
		this.attributes = null;

		for (let i = 0; i < this.glVertexArrayObjects.length; i++)
		{
			this.glVertexArrayObjects[i].destroy();
		};

		this.glVertexArrayObjects = null;

		this.indexBuffer.destroy();
		this.indexBuffer = null;
	}
}


module.exports = Geometry;
