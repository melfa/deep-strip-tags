# deep-strip-tags
Strip tags from object's string properties recursively. Uses [striptags](https://github.com/ericnorris/striptags) package to actually strip tags.

Written in Typescript, provided NPM package contains compiled ES5 Javascript.

## Usage

```typescript
function deepStripTags(object: { [index: string]: any }, attributes?: string[])
```

```javascript
const deepStripTags = require('deep-strip-tags');
t = { a: '<a>hello</a>', b: { c: '<b>test</b>' }, d: 'world' };

// strip tags from all string properties
deepStripTags(t);
// t: { a: 'hello', b: { c: 'test' }, d: 'world' }

// strip tags from selected properties
deepStripTags(t, ['a']);
// t: { a: 'hello', b: { c: '<b>test</b>' }, d: 'world' }
```

Typescript typings included:
```typescript
import * as deepStripTags from 'deep-strip-tags';
```

## Installing
```
npm install deep-strip-tags
```
