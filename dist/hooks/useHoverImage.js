"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
exports.useHoverImage = function (defaultThumbnail, src) {
    var _a = react_1.useState(defaultThumbnail), image = _a[0], setImage = _a[1];
    function handleMouseOver() {
        setImage(src);
    }
    function handleMouseLeave() {
        setImage(defaultThumbnail);
    }
    return {
        onMouseOver: handleMouseOver,
        onMouseLeave: handleMouseLeave,
        src: image,
    };
};
