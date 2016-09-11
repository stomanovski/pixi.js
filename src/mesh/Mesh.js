var core = require('../core'),
    Shader = require('./webgl/MeshShader');
/**
 * Base mesh class
 * @class
 * @extends PIXI.Container
 * @memberof PIXI.mesh
 * @param texture {PIXI.Texture} The texture to use
 * @param [vertices] {Float32Array} if you want to specify the vertices
 * @param [uvs] {Float32Array} if you want to specify the uvs
 * @param [indices] {Uint16Array} if you want to specify the indices
 * @param [drawMode] {number} the drawMode, can be any of the Mesh.DRAW_MODES consts
 */
function Mesh(geometry, shader, drawMode)
{
    core.Container.call(this);

    /**
     * The texture of the Mesh
     *
     * @member {PIXI.Texture}
     * @private
     */
//    this._texture = null;

    /**
     * The Uvs of the Mesh
     *
     * @member {Float32Array}
     */
    //this.uvs = uvs || new Float32Array([0, 0,
       /// 1, 0,
        //1, 1,
        //0, 1]);

    /**
     * An array of vertices
     *
     * @member {Float32Array}
     */
  //  this.vertices = vertices || new Float32Array([0, 0,
    //    100, 0,
      //  100, 100,
        //0, 100]);

    /*
     * @member {Uint16Array} An array containing the indices of the vertices
     */
    //  TODO auto generate this based on draw mode!
   // this.indices = indices || new Uint16Array([0, 1, 3, 2]);

//    this.positionBuffer = Buffer.from(this.vertices);
  //  this.uvBuffer = Buffer.from(this.uvs);
    //this.indexBuffer = Buffer.from(this.indices);


    this.geometry = geometry;
    this.shader = shader;

    /*new Geometry();
    this.geometry.addAttribute('aVertexPosition', Attribute.from(this.positionBuffer) );
    this.geometry.addAttribute('aTextureCoord', Attribute.from(this.uvBuffer) );
    this.geometry.addIndex( this.indexBuffer );
    */
    /**
     * The blend mode to be applied to the sprite. Set to `PIXI.BLEND_MODES.NORMAL` to remove any blend mode.
     *
     * @member {number}
     * @default PIXI.BLEND_MODES.NORMAL
     * @see PIXI.BLEND_MODES
     */
    this.blendMode = core.BLEND_MODES.NORMAL;

    /**
     * Triangles in canvas mode are automatically antialiased, use this value to force triangles to overlap a bit with each other.
     *
     * @member {number}
     */

    /**
     * The way the Mesh should be drawn, can be any of the {@link PIXI.mesh.Mesh.DRAW_MODES} consts
     *
     * @member {number}
     * @see PIXI.mesh.Mesh.DRAW_MODES
     */
    this.drawMode = drawMode || Mesh.DRAW_MODES.TRIANGLE_MESH;

     this.tintRgb = new Float32Array([1, 1, 1]);

     /**
     * The default shader that is used if a mesh doesn't have a more specific one.
     *
     * @member {PIXI.Shader}
     */
     this._glDatas = [];
}

// constructor
Mesh.prototype = Object.create(core.Container.prototype);
Mesh.prototype.constructor = Mesh;
module.exports = Mesh;

/**
 * Renders the object using the WebGL renderer
 *
 * @param renderer {PIXI.WebGLRenderer} a reference to the WebGL renderer
 * @private
 */
Mesh.prototype._renderWebGL = function (renderer)
{
    // get rid of any thing that may be batching.
    renderer.flush();

    //  renderer.plugins.mesh.render(this);
    var gl = renderer.gl;

    //always use shaders - rather than GLShadr
    //generate geometry structure from a shader :)
    renderer.bindGeometry(this.geometry);

    if(this.shader.uniforms.translationMatrix)
    {
        this.shader.uniforms.translationMatrix = this.transform.worldTransform.toArray(true);
    }

    renderer.bindFilter(this.shader);

    renderer.state.setBlendMode(this.blendMode);

    //renderer.bindShader(glData.shader);
    //glData.shader.uniforms.translationMatrix = this.transform.worldTransform.toArray(true);
    //glData.shader.uniforms.alpha = this.worldAlpha;
    //glData.shader.uniforms.tint = this.tintRgb;

    var drawMode = this.drawMode;

    if(drawMode === Mesh.DRAW_MODES.TRIANGLE_MESH)
    {
         drawMode = gl.TRIANGLE_STRIP;
    }
    else if(drawMode === Mesh.DRAW_MODES.POINTS)
    {

        drawMode = gl.POINTS;
    }
    else
    {
        drawMode = gl.TRIANGLES;
    }


    var vao = this.geometry.glVertexArrayObjects[renderer.CONTEXT_UID];

    vao.draw(drawMode);

    vao.unbind();
    renderer.unbindGeometry(this.geometry);

};


/**
 * Returns the bounds of the mesh as a rectangle. The bounds calculation takes the worldTransform into account.
 *
 * @param [matrix=this.worldTransform] {PIXI.Matrix} the transformation matrix of the sprite
 * @return {PIXI.Rectangle} the framing rectangle
 */
Mesh.prototype._calculateBounds = function ()
{
    //TODO - we can cache local bounds and use them if they are dirty (like graphics)
    //this._bounds.addVertices(this.transform, this.vertices, 0, this.vertices.length);
};

/**
 * Tests if a point is inside this mesh. Works only for TRIANGLE_MESH
 *
 * @param point {PIXI.Point} the point to test
 * @return {boolean} the result of the test
 */


/**
 * Different drawing buffer modes supported
 *
 * @static
 * @constant
 * @property {object} DRAW_MODES
 * @property {number} DRAW_MODES.TRIANGLE_MESH
 * @property {number} DRAW_MODES.TRIANGLES
 */
Mesh.DRAW_MODES = {
    TRIANGLE_MESH: 1,
    TRIANGLES: 2,
    POINTS: 3
};
