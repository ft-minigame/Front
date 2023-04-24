"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var Frame_png_1 = __importDefault(require("../assets/images/Frame.png"));
var react_1 = __importDefault(require("react"));
var Background = function () {
    return (react_1.default.createElement(Wrapper, null,
        react_1.default.createElement(BackImage, null)));
};
exports.default = Background;
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-width: 1200px;\n  min-height: 675px;\n"], ["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-width: 1200px;\n  min-height: 675px;\n"])));
var BackImage = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  width: 1200px;\n  height: 675px;\n  background: url(", ");\n  background-repeat: no-repeat;\n  background-size: cover;\n"], ["\n  position: relative;\n  width: 1200px;\n  height: 675px;\n  background: url(", ");\n  background-repeat: no-repeat;\n  background-size: cover;\n"])), Frame_png_1.default);
var templateObject_1, templateObject_2;
