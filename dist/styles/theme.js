"use strict";
// 대부분의 웹 브라우저에서 루트 요소의 폰트 사이즈는 16입니다.
// rem은 이러한 루트 요소의 폰트 사이즈를 1rem으로 하는 상대 단위이므로 16으로 나누어 표현할 수 있습니다.
Object.defineProperty(exports, "__esModule", { value: true });
// 함수를 사용해 값을 계산할 수 있습니다.
var calRem = function (size) { return size / 16 + "rem"; };
// 폰트 사이즈에 대한 변수를 객체에 담아서 사용할 수 있습니다.
var fontSize = {
    xs: calRem(12),
    sm: calRem(14),
    md: calRem(16),
    lg: calRem(18),
    xl: calRem(20),
    // 값을 사용하는 용도에 맞춰 이름을 지정해줄 수도 있습니다.
    subTitle: calRem(24),
    title: calRem(36),
};
// 길이에 대한 변수를 객체에 담아서 사용할 수 있습니다.
var length = {
    // 단위를 간단하게 사용하고 싶으면 연산값이 아니라 바로 지정해줄 수도 있습니다.
    xs: '0.5rem',
    sm: '1.0rem',
    md: '1.5rem',
    lg: '2.5rem',
    xl: '3.5rem',
};
// 색상에 대한 변수를 객체에 담아서 사용할 수 있습니다.
var color = {
    brandColor: '#5CC6BA',
    subText: '#bababc',
    black: '#17202A',
    white: '#FDFEFE',
    blue: '#3498DB',
    transparentBrandColor: 'rgba(92, 198, 186, 0.1)',
    transparentBackground: 'rgba(0, 0, 0, 0.1)',
};
// 각각의 객체들을 theme이라는 하나의 객체로 묶어서 export합니다.
var theme = { fontSize: fontSize, length: length, color: color };
exports.default = theme;
