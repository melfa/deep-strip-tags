import lodashIsstring = require('lodash.isstring');
import lodashIsobject = require('lodash.isobject');
import * as stripTags from 'striptags';

export = function deepStripTags(object: { [index: string]: any }, attributes?: string[]) {
  for (const attribute of Object.keys(object)) {
    if (undefined !== attributes && -1 === attributes.indexOf(attribute)) {
      continue;
    }
    if (lodashIsstring(object[attribute])) {
      object[attribute] = stripTags(object[attribute]);
    } else if (lodashIsobject(object[attribute])) {
      deepStripTags(object[attribute]);
    }
  }
};
