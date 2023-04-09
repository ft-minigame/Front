// 대부분의 웹 브라우저에서 루트 요소의 폰트 사이즈는 16입니다.
// rem은 이러한 루트 요소의 폰트 사이즈를 1rem으로 하는 상대 단위이므로 16으로 나누어 표현할 수 있습니다.

// 함수를 사용해 값을 계산할 수 있습니다.
const calRem = (size) => `${size / 16}rem`;

// 폰트 사이즈에 대한 변수를 객체에 담아서 사용할 수 있습니다.
const fontSize = {
  xs: calRem(12), // 0.75rem
  sm: calRem(14), // 0.875rem
  md: calRem(16), // 1rem
  lg: calRem(18), // 1.125rem
  xl: calRem(20), // 1.25rem
  // 값을 사용하는 용도에 맞춰 이름을 지정해줄 수도 있습니다.
  subTitle: calRem(24), // 1.5rem;
  title: calRem(36), // 2.25rem;
};

// 길이에 대한 변수를 객체에 담아서 사용할 수 있습니다.
const length = {
  // 단위를 간단하게 사용하고 싶으면 연산값이 아니라 바로 지정해줄 수도 있습니다.
  xs: '0.5rem',
  sm: '1.0rem',
  md: '1.5rem',
  lg: '2.5rem',
  xl: '3.5rem',
};

// 색상에 대한 변수를 객체에 담아서 사용할 수 있습니다.
const color = {
  brandColor: '#5CC6BA',
  subText: '#bababc',
  black: '#17202A',
  white: '#FDFEFE',
  blue: '#3498DB',
  transparentBrandColor: 'rgba(92, 198, 186, 0.1)',
  transparentBackground: 'rgba(0, 0, 0, 0.1)',
};

// 각각의 객체들을 theme이라는 하나의 객체로 묶어서 export합니다.
const theme = { fontSize, length, color};

export default theme;