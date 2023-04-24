"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var pages_1 = require("./pages");
var globalStyle_1 = __importDefault(require("./styles/globalStyle"));
var react_1 = __importDefault(require("react"));
function App() {
    return (react_1.default.createElement(react_router_dom_1.HashRouter, null,
        react_1.default.createElement(globalStyle_1.default, null),
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(pages_1.Index, null) }))));
}
exports.default = App;
