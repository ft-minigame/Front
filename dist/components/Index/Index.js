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
var MenuButton_1 = require("./MenuButton");
var Index_1 = require("../../assets/images/Index");
var react_router_dom_1 = require("react-router-dom");
var react_1 = __importDefault(require("react"));
var Menus = [
    {
        id: 0,
        src: Index_1.GameSelect,
        defaultThumbnail: Index_1.GameSelectThumbnail,
        url: '/gameselect',
    },
    {
        id: 1,
        src: Index_1.Inquiry,
        defaultThumbnail: Index_1.InquiryThumbnail,
        url: '/gameselect',
    },
    {
        id: 2,
        src: Index_1.Setting,
        defaultThumbnail: Index_1.SettingThumbnail,
        url: '/gameselect',
    },
    {
        id: 3,
        src: Index_1.Rank,
        defaultThumbnail: Index_1.RankThumbnail,
        url: '/gameselect',
    },
    {
        id: 4,
        src: Index_1.Cat,
        defaultThumbnail: Index_1.CatThumbnail,
        url: '',
    },
];
var Index = function () {
    var navigate = react_router_dom_1.useNavigate();
    return (react_1.default.createElement(Wrapper, null,
        react_1.default.createElement(background_1.default, null),
        react_1.default.createElement(ButtonWrapper, null, Menus.map(function (_a) {
            var id = _a.id, defaultThumbnail = _a.defaultThumbnail, src = _a.src, url = _a.url;
            return (react_1.default.createElement(MenuButton_1.MenuButton, { key: id, defaultThumbnail: defaultThumbnail, src: src, onClick: function () {
                    navigate(url);
                }, restProps: undefined }));
        }))));
};
exports.default = Index;
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-width: 1200px;\n  min-height: 675px;\n"], ["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-width: 1200px;\n  min-height: 675px;\n"])));
var ButtonWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"], ["\n  position: absolute;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"])));
var templateObject_1, templateObject_2;
