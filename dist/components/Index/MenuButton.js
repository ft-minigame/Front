"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var useHoverImage_1 = require("../../hooks/useHoverImage");
var react_1 = __importDefault(require("react"));
exports.MenuButton = function (_a) {
    var defaultThumbnail = _a.defaultThumbnail, _src = _a.src, onClick = _a.onClick, restProps = __rest(_a, ["defaultThumbnail", "src", "onClick"]);
    var _b = useHoverImage_1.useHoverImage(defaultThumbnail, _src), src = _b.src, onMouseOver = _b.onMouseOver, onMouseLeave = _b.onMouseLeave;
    return (react_1.default.createElement(Button, __assign({ onMouseOver: onMouseOver, onMouseLeave: onMouseLeave, onClick: onClick }, restProps),
        react_1.default.createElement(ButtonImg, { src: src })));
};
var Button = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer; // \uCEE4\uC11C \uC62C\uB9AC\uBA74 \uC190\uBC14\uB2E5\n  // position : absolute;\n  background-color: transparent;\n  border: none;\n"], ["\n  cursor: pointer; // \uCEE4\uC11C \uC62C\uB9AC\uBA74 \uC190\uBC14\uB2E5\n  // position : absolute;\n  background-color: transparent;\n  border: none;\n"])));
var ButtonImg = styled_components_1.default.img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  &:hover {\n    // \uCEE4\uC11C \uC62C\uB9AC\uBA74 \uC774\uBBF8\uC9C0 \uCEE4\uC9C0\uAC8C\n    // transform: scale(1.3);\n  }\n  width: 338px;\n  height: 80px;\n"], ["\n  &:hover {\n    // \uCEE4\uC11C \uC62C\uB9AC\uBA74 \uC774\uBBF8\uC9C0 \uCEE4\uC9C0\uAC8C\n    // transform: scale(1.3);\n  }\n  width: 338px;\n  height: 80px;\n"])));
var templateObject_1, templateObject_2;
