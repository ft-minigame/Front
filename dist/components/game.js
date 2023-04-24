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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var react_1 = require("react");
var background_1 = __importDefault(require("./background"));
var back_png_1 = __importDefault(require("../assets/images/character/back.png"));
var front_png_1 = __importDefault(require("../assets/images/character/front.png"));
var left_png_1 = __importDefault(require("../assets/images/character/left.png"));
var right_png_1 = __importDefault(require("../assets/images/character/right.png"));
var react_2 = __importDefault(require("react"));
var GAME_WIDTH = 680;
var GAME_HEIGHT = 440;
var CHARACTER_SIZE = 40;
var Game = function () {
    var _a = react_1.useState([{ x: 5, y: 5 }]), snake = _a[0], setSnake = _a[1];
    var _b = react_1.useState('back'), direction = _b[0], setDirection = _b[1];
    var _c = react_1.useState(false), gameOver = _c[0], setGameOver = _c[1];
    var _d = react_1.useState(back_png_1.default), image = _d[0], setImage = _d[1];
    react_1.useEffect(function () {
        var intervalId = setInterval(function () {
            moveSnake();
        }, 100);
        return function () { return clearInterval(intervalId); };
    }, [snake]);
    var moveSnake = function () {
        var head = __assign({}, snake[0]);
        switch (direction) {
            case 'up':
                head.y -= 1;
                break;
            case 'down':
                head.y += 1;
                break;
            case 'left':
                head.x -= 1;
                break;
            case 'right':
                head.x += 1;
                break;
            default:
                break;
        }
        if (head.x < 0 || head.x * CHARACTER_SIZE >= GAME_WIDTH || head.y < 0 || head.y * CHARACTER_SIZE >= GAME_HEIGHT) {
            setGameOver(true);
            return;
        }
        setSnake(__spreadArrays([head], snake.slice(0, -1)));
    };
    var handleKeyPress = function (event) {
        switch (event.key) {
            case 'ArrowUp':
                setDirection('up');
                setImage(back_png_1.default);
                break;
            case 'ArrowDown':
                setDirection('down');
                setImage(front_png_1.default);
                break;
            case 'ArrowLeft':
                setDirection('left');
                setImage(left_png_1.default);
                break;
            case 'ArrowRight':
                setDirection('right');
                setImage(right_png_1.default);
                break;
            default:
                break;
        }
    };
    return (react_2.default.createElement(Wrapper, { onKeyDown: handleKeyPress },
        react_2.default.createElement(background_1.default, null),
        react_2.default.createElement(Canvas, null, snake.map(function (block, index) { return (react_2.default.createElement(SnakeBlock, { src: image, key: index, style: { left: block.x * CHARACTER_SIZE, top: block.y * CHARACTER_SIZE } })); })),
        gameOver && react_2.default.createElement(GameOver, null, "Game Over!")));
};
exports.default = Game;
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"], ["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"])));
var Canvas = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n  position: absolute;\n  border: 1px solid black;\n"], ["\n  width: ", "px;\n  height: ", "px;\n  position: absolute;\n  border: 1px solid black;\n"])), GAME_WIDTH, GAME_HEIGHT);
var SnakeBlock = styled_components_1.default.img(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  width: ", "px;\n  height: ", "px;\n"], ["\n  position: absolute;\n  width: ", "px;\n  height: ", "px;\n"])), CHARACTER_SIZE, CHARACTER_SIZE);
var GameOver = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  font-size: 2rem;\n  color: red;\n  text-align: center;\n"], ["\n  position: absolute;\n  font-size: 2rem;\n  color: red;\n  text-align: center;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
