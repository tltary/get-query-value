# Get query value

Easy way to get query value from url or string using native js

## Install

```
npm i get-query-value --save
```

```

import getQueryValue from 'get-query-value';

// using
console.log(getQueryValue(window.location.search));

//or
const url = 'https://example.com/?test=1&test2=1';
console.log(getQueryValue(url)); // {test: "1", test2: "1"}
```
