// this file is not transpiled hence we use commonJS

//register babel to transpile before our tests run
require("babel-register")();

// disable webpack features that mocha does not understand
require.extensions[".css"] = function() {};
