

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

module.exports = Geometry;


//function Geometry()
//{


//	this.addAttribute('position', 2);
//	this.addAttribute('color', 1);
//	this.addAttribute('uvs', 1);
//	this.addAttribute('textureId', 1); // used for batching!
//}
/*
Geometry.prototype.addAttribute = function( name, size, type )
{
	this[name] = {
		type:type || 23,
		array:new Float32Array(this.size * size)
	};
}


Geometry.prototype.interleave = function( name, size, type )
{
	this[name] = new Float32Array();
}

Geometry.prototype.updatePosition = function( func )
{
	//
}
/*

var buffer = new Buffer(new Float32Array(100));

var vertSize = 32;

var geometry = new Geometry()
.addIndex(this.indexBuffer)
.addAttribute('aVertexPosition', new Attribute( buffer, PIXI.FLOAT, false, vertSize, 0) )
.addAttribute('aTextureCoord', new Attribute( buffer , PIXI.UNSIGNED_SHORT, true, vertSize, 2 * 4) )
.addAttribute('aColor', new Attribute( buffer, PIXI.UNSIGNED_BYTE, true, vertSize, 3 * 4) )
.addAttribute('aTextureId', new Attribute( buffer, PIXI.FLOAT, false, vertSize, 4 * 4) );


shader = new Shader();
shader.uniforms.x = 100;
*/
//var buffer = new Buffer(100, PIXI.FLOAT32, PIXI.STATIC);
//var indexBuffer = new IndexBuffer(100, PIXI.POINTS);

//this.vaos[this.vertexCount] = this.renderer.createVao()


//geometry.addAttribute(buffer, )
//module.exports = Geometry;
//


/**
 *
 *
 * mesh..
 * index
 * mesh
 *
 * position
 * size
 */
/*
geometry.addAttribute(position, 2, FLOAT, function( geometry, style){

	style.tint = xx + zz + cc;
	for (var i = 0; i < geometry.color.length; i++) {
		geometry.color[0] = tint;
	};

});

geometry.addAttribute(color, 1, UINT_32, function( geometry, style){

	style.tint = xx + zz + cc;
	for (var i = 0; i < geometry.color.length; i++) {
		geometry.color[0] = tint;
	};

});

geometry.addAttribute(uvs, 2, FLOAT, function(geometry, style){

	style.tint = xx + zz + cc;
	for (var i = 0; i < geometry.color.length; i++) {
		geometry.position[0] = tint;
	};

});

geometry.addAttribute(textureId, 2, FLOAT, function(geometry, style){

	style.tint = xx + zz + cc;
	for (var i = 0; i < geometry.color.length; i++) {
		geometry.uvs[0] = tint;
	};

});


// 4 buffers
// createClass..
//
this.tint 		= [0,0,0,0];
this.colors 	= [0,0,0,0];
this.positions 	= [1,1,1,1,1,1,1,1];
this.uvs 		= [0,0,1,0,1,1,0,1];

// updload to a batch...
// multitexture...
// graphics... same
// all except positions..
// ALL interleaved..
// interleaving?
// geometry.interleave = true;

format.addAttribute(texture)
format.addAttribute(position)
format.addAttribute(uvs)
format.addAttribute(color)

format
geometry.upload = function(batcher)
{
	//prepared we KNOW it will batch ok..
	batcher
}

//material
//materials - have a stored shader cache
//creating a geometry 'layout'

// uniforms?
// geometry STYLE must be the SAME
//
//quad
//
//geometry has a bunch of buffer arrays
//geometry style has a bunch of uniforms?
//plus a shader?
//uniforms//
//
//blueprint..
//uploadToBuffer

//geometry.addUniform()
//geometry.textures

material, uniforms

batcher.addGeometry(xx);

renderGeometry(xx);
geometry.addAttribute(uvs, 2, FLOAT);

// format must be the same..

geometryStyle = {

	color,
	uvs,


}

/**
 * geometry format //style
 *
 * layout..
 * uniform texture
 *
 * attribute uvs
 * attribute color - inc alpha
 * ** attribute textureId
 *
 * shader
 *
 * set data - pack data
 * the format fills the geometry based on attribues and a custom function
 *
 * can be done automagically I think!
 */

/**
 *
 * batcher.add(geometry, material)
 *
 * if material is same.. then all good
 * we store..
 * if uniforms differ / swap
 * add a new instruction each change..
 *
 * special case for multitexture?
 *
 */
// vertex data
// position
// color
// format..
//batcher.storeInstructions();
//batcher.getInstructions(item);

// command - draw this,


/**
 * addInstruction.shaderSwitch()
 * addInstruction.bind
 * addInstruction(
 * 	buffer:0
 * 	start:1,
 *
 * )
 */