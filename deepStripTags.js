"use strict";
var lodashIsstring = require("lodash.isstring");
var lodashIsobject = require("lodash.isobject");
var stripTags = require("striptags");
module.exports = function deepStripTags(object, attributes) {
    for (var _i = 0, _a = Object.keys(object); _i < _a.length; _i++) {
        var attribute = _a[_i];
        if (undefined !== attributes && -1 === attributes.indexOf(attribute)) {
            continue;
        }
        if (lodashIsstring(object[attribute])) {
            object[attribute] = stripTags(object[attribute]);
        }
        else if (lodashIsobject(object[attribute])) {
            deepStripTags(object[attribute]);
        }
    }
};
//# sourceMappingURL=deepStripTags.js.map