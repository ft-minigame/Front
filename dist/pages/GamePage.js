"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var game_1 = __importDefault(require("../components/game"));
exports.Game = function () {
    return react_1.default.createElement(game_1.default, null);
};
