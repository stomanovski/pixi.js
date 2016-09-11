/**
 * @file        Main export of the PIXI extras library
 * @author      Mat Groves <mat@goodboydigital.com>
 * @copyright   2013-2015 GoodBoyDigital
 * @license     {@link https://github.com/pixijs/pixi.js/blob/master/LICENSE|MIT License}
 */

/**
 * @namespace PIXI.mesh
 */
module.exports = {
    Mesh:           require('./Mesh'),
    Geometry:           require('./geometry/Geometry'),
    Attribute:           require('./geometry/Attribute'),
    Buffer:           require('./geometry/Buffer'),
    Plane:           require('./Plane'),
    NineSlicePlane: require('./NineSlicePlane'),
    Rope:           require('./Rope'),
    MeshShader:     require('./webgl/MeshShader')
};
