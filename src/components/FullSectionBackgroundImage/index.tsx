import React from 'react';
import StyledFullPageBackgroundImage from './styled';

type FullSectionBackgroundImageProps = {
  src: string,
  alt: string
};

const FullSectionBackgroundImage = ({
  src,
  alt,
}: FullSectionBackgroundImageProps) => <StyledFullPageBackgroundImage src={src} alt={alt} />;

export default FullSectionBackgroundImage;
