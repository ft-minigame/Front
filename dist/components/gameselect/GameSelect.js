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
var background_1 = __importDefault(require("../background"));
var game_select_png_1 = __importDefault(require("../../assets/images/Index/game_select.png"));
var GameSelectButton_1 = require("./GameSelectButton");
var GameSelect_1 = require("../../assets/images/GameSelect");
var react_1 = __importDefault(require("react"));
var Games = [
    {
        id: 0,
        src: GameSelect_1.MoaMoa,
        defaultThumbnail: GameSelect_1.MoaMoaThumbnail,
        url: '',
    },
    {
        id: 1,
        src: GameSelect_1.Ready,
        defaultThumbnail: GameSelect_1.ReadyThumbnail,
        url: '',
    },
    {
        id: 2,
        src: GameSelect_1.Ready,
        defaultThumbnail: GameSelect_1.ReadyThumbnail,
        url: '',
    },
];
exports.GameSelect = function () {
    return (react_1.default.createElement(Wrapper, null,
        react_1.default.createElement(background_1.default, null),
        react_1.default.createElement(BackImage, null),
        react_1.default.createElement(ButtonWrapper, null, Games.map(function (_a) {
            var id = _a.id, defaultThumbnail = _a.defaultThumbnail, src = _a.src, url = _a.url;
            return (react_1.default.createElement(GameSelectButton_1.GameSelectButton, { key: id, defaultThumbnail: defaultThumbnail, src: src, restProps: undefined }));
        }))));
};
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-width: 1200px;\n  min-height: 675px;\n"], ["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-width: 1200px;\n  min-height: 675px;\n"])));
var ButtonWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  height: 100vh;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n"], ["\n  position: absolute;\n  height: 100vh;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n"])));
var BackImage = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  width: 338px;\n  height: 80px;\n  margin-bottom: 350px;\n  background: url(", ");\n  background-repeat: no-repeat;\n  background-size: cover;\n"], ["\n  position: absolute;\n  width: 338px;\n  height: 80px;\n  margin-bottom: 350px;\n  background: url(", ");\n  background-repeat: no-repeat;\n  background-size: cover;\n"])), game_select_png_1.default);
var templateObject_1, templateObject_2, templateObject_3;
