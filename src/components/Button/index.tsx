import * as React from 'react';
import StyledButton from './styled';

type Props = {
  text: string;
};

const Button = ({ text }: Props) => <StyledButton>{text}</StyledButton>;

export default Button;
