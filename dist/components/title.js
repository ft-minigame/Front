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
var background_1 = __importDefault(require("./background"));
var Title_png_1 = __importDefault(require("../assets/images/Title/Title.png"));
var gamestart_button_png_1 = __importDefault(require("../assets/images/Title/gamestart_button.png"));
var react_router_dom_1 = require("react-router-dom");
var react_1 = __importDefault(require("react"));
var Title = function () {
    var navigate = react_router_dom_1.useNavigate();
    var handleClick = function () {
        navigate('/index');
    };
    return (react_1.default.createElement(Wrapper, null,
        react_1.default.createElement(background_1.default, null),
        react_1.default.createElement(TitleImgTag, { src: Title_png_1.default }),
        react_1.default.createElement(Button, { onClick: handleClick },
            react_1.default.createElement(ButtonImg, { src: gamestart_button_png_1.default }))));
};
exports.default = Title;
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-width: 1200px;\n  min-height: 675px;\n"], ["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-width: 1200px;\n  min-height: 675px;\n"])));
var TitleImgTag = styled_components_1.default.img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  width: 1200px;\n  height: 675px;\n  object-fit: cover;\n"], ["\n  position: absolute;\n  width: 1200px;\n  height: 675px;\n  object-fit: cover;\n"])));
var Button = styled_components_1.default.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  cursor: pointer; // \uCEE4\uC11C \uC62C\uB9AC\uBA74 \uC190\uBC14\uB2E5\n  position: absolute;\n  margin-top: 380px;\n  position: absolute;\n  background-color: transparent;\n  border: none;\n"], ["\n  cursor: pointer; // \uCEE4\uC11C \uC62C\uB9AC\uBA74 \uC190\uBC14\uB2E5\n  position: absolute;\n  margin-top: 380px;\n  position: absolute;\n  background-color: transparent;\n  border: none;\n"])));
var ButtonImg = styled_components_1.default.img(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  &:hover {\n    // \uCEE4\uC11C \uC62C\uB9AC\uBA74 \uC774\uBBF8\uC9C0 \uCEE4\uC9C0\uAC8C\n    transform: scale(1.3);\n  }\n  width: 120px;\n  height: 40px;\n"], ["\n  &:hover {\n    // \uCEE4\uC11C \uC62C\uB9AC\uBA74 \uC774\uBBF8\uC9C0 \uCEE4\uC9C0\uAC8C\n    transform: scale(1.3);\n  }\n  width: 120px;\n  height: 40px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
