"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodashIsstring = require("lodash.isstring");
var stripTags = require("striptags");
function deepStripTags(object, attributes) {
    for (var attribute in Object.keys(object)) {
        if (undefined !== attributes && -1 === attributes.indexOf(attribute)) {
            continue;
        }
        if (!lodashIsstring(object[attribute])) {
            continue;
        }
        object[attribute] = stripTags(object[attribute]);
    }
}
exports.deepStripTags = deepStripTags;
//# sourceMappingURL=deepStripTags.js.map