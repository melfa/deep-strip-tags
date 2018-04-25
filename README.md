# deep-strip-tags
Strip tags from object's string properties recursively. Uses [striptags](https://github.com/ericnorris/striptags) package to actually strip tags.

Written in Typescript, provided NPM package contains compiled ES5 Javascript.

## Usage

```javascript
const deepStripTags = require('deep-strip-tags');
deepStripTags(userProfile, [
  'firstName',
  'lastName',
  'contactEmail',
  'contactPhone',
  'about',
]);
```
Typescript typings included.

## Installing
```
npm install deep-strip-tags
```
