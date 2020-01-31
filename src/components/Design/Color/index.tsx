import * as React from 'react';
import StyledColor from './styled';
import Layout from '../../Layout';

type ColorProps = {
  [key: string]: any
};

const generateColorPaletteRow = (colors: any, fonts: any) => Object.keys(colors).map((color, i) => {
  const darkFontStyle = { backgroundColor: `${colors[color]}`, color: `${fonts.dark}` };
  const lightFontStyle = { backgroundColor: `${colors[color]}`, color: `${fonts.light}` };

  const darkFontBox: any = <div key={`color-${colors[color]}`} className="palette-color" style={darkFontStyle}>{`${color} ${colors[color]}`}</div>;
  const lightFontBox: any = <div key={`color-${colors[color]}`} className="palette-color" style={lightFontStyle}>{`${color} ${colors[color]}`}</div>;

  return ((i === 0)
    || (i === 1)
    || (i === 2))
    ? darkFontBox
    : lightFontBox;
});

const Color = ({
  colors,
  fonts,
  text,
}: ColorProps): any => (
  <Layout>
    <StyledColor>
      <div className="color-container" style={{ backgroundColor: colors[500], color: colors[200] }}>{text}</div>
      <div className="palette-container">
        {generateColorPaletteRow(colors, fonts)}
      </div>
      <div className="swatch-container">
        {generateColorPaletteRow(colors, fonts)}
      </div>
    </StyledColor>
  </Layout>
);

export default Color;
