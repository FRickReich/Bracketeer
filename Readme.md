BRACKETEER
==========

An easy to use node.js module to create double-bracket wiki links.

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

an array of strings is needed (best served by a database) because if the string is not found then it will put the class "missing" to the link, so you can easily style it differently.

```
var bracketeer = require('bracketeer');

var array = ["guest", "user"];

var string = "Hey! this is another [[test]], it is just for testing purposes!"

string.bracketeer(array)

// #=> Hey! this is a <a href="/test" class="missing">test</a>, it is just for testing purposes!
```

License
-------
Copyright (c) 2013 F. Rick Reich & Ben Atkin. Licensed under the terms of the MIT license.

http://frickreich.mit-license.org/