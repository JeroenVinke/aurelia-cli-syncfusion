define("app",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){this.message="Hello World!",this.OrdersList=[{OrderId:5}]}return e}();t.App=n}),define("environment",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={debug:!1,testing:!1}}),define("main",["require","exports","./environment"],function(e,t,n){"use strict";function r(e){e.use.standardConfiguration().feature("resources").plugin("aurelia-syncfusion-bridge",function(e){return e.useAll()}),n.default.debug&&e.use.developmentLogging(),n.default.testing&&e.use.plugin("aurelia-testing"),e.start().then(function(){return e.setRoot()})}Object.defineProperty(t,"__esModule",{value:!0}),t.configure=r}),define("resources/index",["require","exports"],function(e,t){"use strict";function n(e){}Object.defineProperty(t,"__esModule",{value:!0}),t.configure=n}),define("text!app.html",["module"],function(e){e.exports='<template>\n  <h1>${message}</h1>\n  \n  <require from="syncfusion-javascript/Content/ej/web/ej.widgets.core.bootstrap.min.css"></require>\n  <require from="syncfusion-javascript/Content/ej/web/bootstrap-theme/ej.theme.min.css"></require>\n\n  <ej-grid e-data-source.bind="OrdersList" e-allow-paging=true e-allow-sorting=true>\n    <ej-column e-field="OrderID" e-header-text="Order ID" e-text-align="right"></ej-column>\n    <ej-column e-field="CustomerID" e-header-text="Customer ID"></ej-column>\n    <ej-column e-field="EmployeeID" e-header-text="Employee ID" e-text-align="right"></ej-column>\n    <ej-column e-field="Freight" e-header-text="Freight" e-format="{0:C}" e-text-align="right"></ej-column>\n    <ej-column e-field="OrderDate" e-header-text="Order Date" e-format="{0:MM/dd/yyyy}" e-text-align="right"></ej-column>\n</ej-grid>\n</template>\n'});