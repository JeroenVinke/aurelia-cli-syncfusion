define("app",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){this.message="Hello World!"}return e}();t.App=n}),define("environment",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={debug:!1,testing:!1}}),define("main",["require","exports","./environment"],function(e,t,n){"use strict";function u(e){e.use.standardConfiguration().feature("resources").plugin("aurelia-syncfusion-bridge",function(e){return e.ejGrid().ejTemplate()}),n.default.debug&&e.use.developmentLogging(),n.default.testing&&e.use.plugin("aurelia-testing"),e.start().then(function(){return e.setRoot()})}Object.defineProperty(t,"__esModule",{value:!0}),t.configure=u}),define("resources/index",["require","exports"],function(e,t){"use strict";function n(e){}Object.defineProperty(t,"__esModule",{value:!0}),t.configure=n}),define("text!app.html",["module"],function(e){e.exports="<template>\n  <h1>${message}</h1>\n</template>\n"});