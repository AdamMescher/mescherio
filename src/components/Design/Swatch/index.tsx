import * as React from 'react';
import { v4 as uuid } from 'uuid';
import StyledSwatch from './styled';

const generateColorPaletteSwatch = (colors: any, fonts: any) => Object.keys(colors).map((color, i) => {
  const darkFontStyle = { backgroundColor: `${colors[color]}`, color: `${fonts.dark}` };
  const lightFontStyle = { backgroundColor: `${colors[color]}`, color: `${fonts.light}` };

  const darkFontBox: any = <div key={`swatch-${colors[color]}`} className="swatch-color" style={darkFontStyle}>{color}</div>;
  const lightFontBox: any = <div key={`swatch-${colors[color]}`} className="swatch-color" style={lightFontStyle}>{color}</div>;

  return (
    (i === 0)
    || (i === 1)
    || (i === 2)
      ? darkFontBox
      : lightFontBox);
});

const Swatch = (colors: any, fonts: any) => (
  <StyledSwatch>
    {generateColorPaletteSwatch(colors, fonts)}
  </StyledSwatch>
);

export default Swatch;
