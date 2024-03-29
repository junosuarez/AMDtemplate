# AMDtemplate

A base project to start a new AMD app.

## Build
This project includes r.js, the RequireJS AMD optimizer. This will compile your modules and dependencies into a single file for production. You will need Node.js installed to run the optimizer. To build the project, run

	> node r.js -o build/main.build.js

Read more about [customizing your build](http://requirejs.org/docs/optimization.html).

## Included libs

 - [RequireJS 2.0.2](http://requirejs.org/) - AMD loader ([docs](http://requirejs.org/docs/api.html))
 - [jQuery 1.7.2](http://jquery.com/) - venerable institution of DOM manipulation and AJAX stuff ([docs](http://docs.jquery.com/Main_Page))
 - [lodash 0.3.1](http://lodash.com/) - functional goodness, underscore replacement ([docs](http://lodash.com/docs))
 - [AMD text plugin](http://requirejs.org/docs/download.html#text) - load text as a dependency ([docs](http://requirejs.org/docs/api.html#text))
 - [AMD template plugin](https://github.com/ZeeAgency/requirejs-tpl) - load and compile underscore microtemplates as a dependency ([docs](https://github.com/ZeeAgency/requirejs-tpl/blob/master/README.md))