/**
 * Helper class to create a webGL buffer
 *
 * @class
 * @memberof PIXI.glCore
 * @param gl {WebGLRenderingContext} The current WebGL rendering context
 * @param type {gl.ARRAY_BUFFER | gl.ELEMENT_ARRAY_BUFFER} @mat
 * @param data {ArrayBuffer| SharedArrayBuffer|ArrayBufferView} an array of data
 * @param drawType {gl.STATIC_DRAW|gl.DYNAMIC_DRAW|gl.STREAM_DRAW}
 */
class Buffer
{
	constructor(data)
	{
		/**
	     * The type of the buffer
	     *
	     * @member {gl.ARRAY_BUFFER|gl.ELEMENT_ARRAY_BUFFER}
	     */
		//this.type = type || gl.ARRAY_BUFFER;

		/**
	     * The draw type of the buffer
	     *
	     * @member {gl.STATIC_DRAW|gl.DYNAMIC_DRAW|gl.STREAM_DRAW}
	     */
		//this.drawType = drawType || gl.STATIC_DRAW;

		/**
	     * The data in the buffer, as a typed array
	     *
	     * @member {ArrayBuffer| SharedArrayBuffer|ArrayBufferView}
	     */
		this.data = data;

		this._glBuffers = [];
	}

	/**
	 * Uploads the buffer to the GPU
	 * @param data {ArrayBuffer| SharedArrayBuffer|ArrayBufferView} an array of data to upload
	 * @param offset {Number} if only a subset of the data should be uploaded, this is the amount of data to subtract
	 */
	update()
	{
		this.needsUpdate = true;
	}

	/**
	 * Destroys the buffer
	 *
	 */
	destroy()
	{

	}
}

module.exports = Buffer;
