"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var styled_reset_1 = __importDefault(require("styled-reset"));
var GlobalStyle = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", ";\n    * {\n        // box-sizing: border-box;\n    }\n    body {\n        // display: flex;\n        // justify-content: center;\n        // text-align: center;\n        // margin: 0;\n        // padding: 0;\n        // font-family: Open-Sans, Helvetica, Sans-Serif;\n    }\n"], ["\n    ", ";\n    * {\n        // box-sizing: border-box;\n    }\n    body {\n        // display: flex;\n        // justify-content: center;\n        // text-align: center;\n        // margin: 0;\n        // padding: 0;\n        // font-family: Open-Sans, Helvetica, Sans-Serif;\n    }\n"])), styled_reset_1.default);
exports.default = GlobalStyle;
var templateObject_1;
