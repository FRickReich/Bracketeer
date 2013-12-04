BRACKETEER
==========
An easy to use string-to-link replacement module working with brackets just like you know it from wikis.

How to use it?
--------------

```
npm install bracketeer
```

```
var bracketeer = require('bracketeer');

var array = ["test", "guest", "user"];

var string = "Hey! this is a [[test]], it is just for testing purposes!"

string.bracketeer(array)

// #=> Hey! this is a <a href="/test">test</a>, it is just for testing purposes!
```

an array of strings is needed (best served by a database) because if the string is not found then it will put the class "missing" to the link:

```
var array = ["guest", "user"];

var string = "Hey! this is another [[test]], it is just for testing purposes!"

// #=> Hey! this is a <a href="/test" class="missing">test</a>, it is just for testing purposes!
```

License
-------
Copyright (c) 2013 F. Rick Reich & Ben Atkin. Licensed under the terms of the MIT license.